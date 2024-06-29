/**
 * Repeater Controll
 */
(function($) {
    class Repeater {
        constructor() {
            this.init();
        }
        init() {
            this.handleRepeater("charming_portfolio_social_link_add", ['charming_portfolio_empty-row__social_link', 'screen-reader-text'], '#repeatable-fieldset-one tbody>tr', 'charming_portfolio_social_link_remove','social_link');
            this.handleRepeater("charming_portfolio_skill_link_add", ['charming_portfolio_empty-row__skills_link', 'screen-reader-text'], '#repeatable-fieldset-one tbody>tr', 'charming_portfolio_skills_remove','skills');
            this.handleRepeater("charming_portfolio_experience_add", ['charming_portfolio_empty-row__experience', 'screen-reader-text'], '#repeatable-fieldset-two tbody>tr', 'charming_portfolio_experience_remove','experiences');
            this.handleRepeater("charming_portfolio_work_add", ['charming_portfolio_empty-row__works', 'screen-reader-text'], '#repeatable-fieldset-three tbody>tr', 'charming_portfolio_project_remove','works');
        }
        handleRepeater(addBtn, hiddenFields, insertBefore, removeBtn, dataName) {
            let queue = $(`${ insertBefore }:nth-last-child(2) input`).data("queue");
            $(`#${addBtn}`).on('click', function() {
                queue++;
                queue = isNaN(queue) ? 1 : queue ;
                let row = $(`.${hiddenFields.join(".")}`).clone(true).removeClass(hiddenFields.join(" "));
                let newInputs = row.find('input, textarea');
                console.log(`.${hiddenFields.join(".")}`)
                newInputs.each(function() {
                    $(this).attr('data-queue', queue);
                    let name = $(this).attr('name');
                    let inputType = $(this)[0].className;                    
                    $(this).attr('name', `CHARMING_PORTFOLIO[${dataName}][${queue}][][${inputType}]`);
                    let inputId = $(this).attr("id");
                    let LabelFor = $(this).siblings('label').attr('for');
                    $(this).attr("id",`${inputId}-${queue}`);
                    $(this).siblings('label').attr("for",`${LabelFor}-${queue}`);
                });
                // row.removeClass(hiddenFields.join(" "));
                row.insertBefore(`${insertBefore}:last-child`);
                return false;
            });
            $(`.${removeBtn}`).on('click', function() {
                $(this).parents('tr').remove();
                return false;
            });
        }
    }
    new Repeater();
})(jQuery)