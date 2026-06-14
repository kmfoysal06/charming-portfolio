import Quill from 'quill';

import 'quill/dist/quill.snow.css';

jQuery(document).ready(function($) {
    const toolbarOptions = [
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['link', 'clean']
    ];

    function initQuillEditor(textareaRoot) {
        const $items = $(textareaRoot);

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
    // distroy all quill editor before init
    function destroyQuillEditors() {
        $('.quill-editor-slot.ql-container').each(function() {
            const quillInstance = Quill.find(this);
            if (quillInstance) {
                quillInstance.disable();
                quillInstance.off('text-change');
                $(this).removeClass('ql-container').empty();
            }
        });
    }
    document.addEventListener("click", function(event) {
        if ($(event.target).closest('#charming_portfolio_experience_add').length) { 
            console.log(' Add Experience button clicked, reinitializing Quill editors...');
            destroyQuillEditors();
            setTimeout(function() {
                initQuillEditor(".portfolio-aboutme.portfolio-section-content");
                initQuillEditor(".charming-portfolio-experience .responsibilities");
            }, 100);
        }
    });

    $(document).on('charming-portfolio-repeater-add', function(event, dataName, queue) {
        // todo; make this expeirience repeater add and remove reinnitialzation of quill editor work
            console.log(`Repeater added: ${dataName} with queue ${queue}`);
    })
    initQuillEditor(".portfolio-aboutme.portfolio-section-content");
    initQuillEditor(".charming-portfolio-experience .responsibilities");

 });
