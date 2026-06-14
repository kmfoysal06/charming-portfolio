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
        $items = $items.filter(function() {
            return !$(this).hasClass('noquill');
        });

        if (!$items.length) return;

        $items.each(function($idx) {
            const $item = $($items[$idx]);

            if ($item.closest('.quill-editor-slot').length) return;
            const $textarea = $item.find('.quill-textarea-slot');
            const $editorContainer = $item.find('.quill-editor-slot');

            if ($editorContainer.hasClass('ql-container')) return;

            // Sync existing DB content to the container before initializing
            $editorContainer.html($textarea.val());

            const quill = new Quill($editorContainer[0], {
                theme: 'snow',
                modules: {
                    toolbar: toolbarOptions
                }
            });

            quill.on('text-change', function() {
                let html = quill.root.innerHTML;
                if (html === '<p><br></p>') html = ''; 
                $textarea.val(html);
            });
        });
    }

    $(document).on('charming-portfolio-repeater-add', function(event, dataName, queue, row) {
        console.log(dataName);
        let nthRow;
        if(dataName === 'experiences') {
            const responsibilities = row.find('.responsibilities');
            responsibilities.removeClass('noquill');

            nthRow = $(`.charming-portfolio-experience .responsibilities`)[queue - 1];
        }
        if(dataName === 'skills') {
            const skills = row.find('.skill-description');
            skills.removeClass('noquill');
            console.log('editke hatle' , row);

            console.log('raw' , row);
            nthRow = $(`.charming-portfolio-skills .skill-description`)[queue - 1];
        }
        if (nthRow) {
            initQuillEditor(nthRow);
        }
    })
    initQuillEditor(".portfolio-aboutme.portfolio-section-content");
    initQuillEditor(".charming-portfolio-experience .responsibilities");
    initQuillEditor(".charming-portfolio-skills .skill-description");


 });
