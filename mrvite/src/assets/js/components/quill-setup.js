import Quill from 'quill';

import 'quill/dist/quill.snow.css';

jQuery(document).ready(function($) {
    const toolbarOptions = [
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['link', 'clean']
    ];

    function initQuillEditor(textareaRoot) {
        let $items = textareaRoot instanceof jQuery ? textareaRoot : $(textareaRoot);
        //.log('Initializing Quill for items:', $items);
        $items = $items.filter(function() {
            return !$(this).hasClass('noquill');
        });
        //.log('Filtered items for Quill initialization:', $items);

        if (!$items.length) return;

        $items.each(function($idx) {
            //.log(`Processing item ${$idx}:`, this);
            const $item = $($items[$idx]);

            if ($item.closest('.quill-editor-slot').length) return;
            const $textarea = $item.find('.quill-textarea-slot');
            const $editorContainer = $item.find('.quill-editor-slot');

            //.log('editor container:', $editorContainer);
            if ($editorContainer.hasClass('ql-container')) return;

            // Sync existing DB content to the container before initializing
            $editorContainer.html($textarea.val());

            const quill = new Quill($editorContainer[0], {
                theme: 'snow',
                modules: {
                    toolbar: toolbarOptions
                }
            });
            //.log('quill instance' , quill);

            quill.on('text-change', function() {
                let html = quill.root.innerHTML;
                if (html === '<p><br></p>') html = ''; 
                $textarea.val(html);
            });
        });
    }
    /**
     *  as the repeater code is a hell, i have to do this stupid thing to make the queue work.
     *  rn the queue is increase by one always even any of the repeater item remove
     *  so to get the correct container i have to delete the queues that removed from repeater
     *  I wish i added a data attribute of queue in the repeater container.
     * **/
    window.cp_repeater_skill_removed = 0;
    window.cp_repeater_work_removed = 0;
    window.cp_repeater_exp_removed = 0;

    $(document).on('charming-portfolio-repeater-add', function(event, dataName, queue, row) {
        //.log(dataName);
        let nthRow;
        if(dataName === 'experiences') {
            queue = queue - window.cp_repeater_exp_removed;
            const responsibilities = row.find('.responsibilities');
            responsibilities.removeClass('noquill');

            nthRow = $(`.charming-portfolio-experience .responsibilities`)[queue - 1];
        }
        if(dataName === 'skills') {
            queue = queue - window.cp_repeater_skill_removed;
            const skills = row.find('.skill-description');
            //.log("the hook of add skill", skills);
            skills.removeClass('noquill');
            //.log("skills.removeClass('noquill')", skills.removeClass('noquill'));


            
            nthRow = $(`.charming-portfolio-skills .skill-description`)[queue - 1];
            //.log('the noth row in a repeater', nthRow);
        }
        if(dataName === 'works') {
            queue = queue - window.cp_repeater_work_removed;
            const projects = row.find('.charming-portfolio-project-description');
            projects.removeClass('noquill');

            
            nthRow = $(`.charming-portfolio-projects .charming-portfolio-project-description`)[queue - 1];
        }
        //.log('the noth row in a repeater', nthRow);
        if (nthRow) {
            initQuillEditor(nthRow);
        }
    })
    $(document).on('charming-portfolio-before-repeater-remove', function(event, dataName, queue) {
        //.log(dataName);
         let nthRow;
        if(dataName === 'experiences') {
            window.cp_repeater_exp_removed++;
            nthRow = $(`.charming-portfolio-experience .responsibilities`)[queue - 1];
        }
        if(dataName === 'skills') {
            window.cp_repeater_skill_removed++;
            nthRow = $(`.charming-portfolio-skills .skill-description`)[queue - 1];
        }
        if(dataName === 'works') {
            window.cp_repeater_work_removed++;
            nthRow = $(`.charming-portfolio-projects .charming-portfolio-project-description`)[queue - 1];
        }
        if(nthRow) {
            const quillInstance = Quill.find(nthRow);
            if (quillInstance) {
                quillInstance.off('text-change');
                quillInstance.off('selection-change');
                quillInstance.disable();

            }

            quillInstance && quillInstance.root && quillInstance.root.remove();


        }
    });
    initQuillEditor(".portfolio-aboutme.portfolio-section-content");
    initQuillEditor(".charming-portfolio-experience .responsibilities");
    initQuillEditor(".charming-portfolio-skills .skill-description");
    initQuillEditor(".charming-portfolio-project-description");



 });
