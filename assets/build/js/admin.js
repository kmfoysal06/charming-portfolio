/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/admin-experience.js":
/*!***********************************************!*\
  !*** ./src/js/components/admin-experience.js ***!
  \***********************************************/
/***/ (function() {

(function ($) {
  class Experience_Section {
    constructor() {
      this.init();
    }
    init() {
      this.handleWorking();
    }
    handleWorking() {
      const experience_section = $(".charming-portfolio-experience"),
        end_date = experience_section.find('.end_date'),
        still_working = experience_section.find('.working');
      still_working.each(function (index, element) {
        $(element).on("change", function (e) {
          $(this).parents("tr").find('.end_date').prop('disabled', e.target.checked);
        });
        $(element).trigger("change");
      });
    }
  }
  new Experience_Section();
})(jQuery);

/***/ }),

/***/ "./src/js/components/admin-help-icon.js":
/*!**********************************************!*\
  !*** ./src/js/components/admin-help-icon.js ***!
  \**********************************************/
/***/ (function() {

//TODO: make sure the popover fit in the screen
document.addEventListener("mouseover", e => {
  if (e.target.classList.contains("charming-portfolio-help-icon")) {
    const tooltip = e.target.getAttribute("data-title");
    if (tooltip) {
      showPopover(tooltip, e.target);
    }
  }
});
function showPopover(content, target) {
  let popover = document.createElement("div");
  popover.style.position = "absolute";
  popover.style.background = "#333";
  popover.style.color = "#fff";
  popover.style.padding = "5px 10px";
  popover.style.borderRadius = "5px";
  popover.style.fontSize = "12px";
  popover.style.zIndex = "1000";
  popover.style.width = "200px";
  popover.innerText = content;
  document.body.appendChild(popover);
  const rect = target.getBoundingClientRect();
  popover.style.top = rect.top + window.scrollY - popover.offsetHeight - 5 + "px";
  popover.style.left = rect.left + 50 + window.scrollX + (rect.width - popover.offsetWidth) / 2 + "px";
  target.addEventListener("mouseout", () => {
    popover.remove();
  }, {
    once: true
  });
}

/***/ }),

/***/ "./src/js/components/admin-tab.js":
/*!****************************************!*\
  !*** ./src/js/components/admin-tab.js ***!
  \****************************************/
/***/ (function() {

(function () {
  document.addEventListener("click", e => {
    if (e.target.closest(".charming-portfolio-tab")) {
      e.preventDefault();
      const allTabs = document.querySelectorAll(".charming-portfolio-tab");
      const allTabContents = document.querySelectorAll(".charming-portfolio-tabs .tab-content");
      const currTab = e.target.closest("li");
      const currTarget = e.target.closest("li");
      let currTargetID = 'basic-settings';
      if (currTarget && currTarget.querySelector("a")) {
        console.log('cur target', currTarget.querySelector("a").getAttribute("data-target"));
        if (currTarget.querySelector("a").getAttribute("data-target")) {
          currTargetID = currTarget.querySelector("a").getAttribute("data-target");
        }
      }
      console.log("currTarget ID", currTargetID);
      allTabs.forEach(function (tab) {
        if (tab.classList.contains("active")) {
          tab.classList.remove("active");
        }
      });
      currTab.classList.add("active");
      allTabContents.forEach(function (tab) {
        if (tab.classList.contains("active")) {
          tab.classList.remove("active");
        }
        if (tab.id === currTargetID) {
          tab.classList.add("active");
        }
      });
    }
  });
})();

/***/ }),

/***/ "./src/js/components/charm-alert.js":
/*!******************************************!*\
  !*** ./src/js/components/charm-alert.js ***!
  \******************************************/
/***/ (function() {

class CharmAlert {
  constructor() {
    this.timeout = null;
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new CharmAlert();
    }
    return this.instance;
  }
  showAlert(message, type = 'info') {
    const alertBox = document.createElement('div');
    alertBox.className = `charm-alert charm-alert-${type}`;
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50px';
    // zindex 
    alertBox.style.zIndex = '1111';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translateX(-50%)';
    alertBox.style.padding = '10px 20px';
    alertBox.style.borderRadius = '5px';
    alertBox.style.color = '#fff';
    alertBox.style.fontSize = '16px';
    alertBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    alertBox.style.backgroundColor = type === 'success' ? '#4CAF50' : type === 'error' ? '#F44336' : type === 'warning' ? '#FF9800' : '#2196F3';
    alertBox.style.transition = 'opacity 0.3s ease-in-out';
    alertBox.style.opacity = '0.9';
    alertBox.style.cursor = 'pointer';
    alertBox.innerText = message;
    // pause timeout on hover and resume on mouse leave
    alertBox.addEventListener('mouseenter', () => {
      if (typeof this.timeout !== 'undefined') {
        clearTimeout(this.timeout);
      }
    });
    alertBox.addEventListener('mouseleave', () => {
      this.timeout = setTimeout(() => {
        alertBox.remove();
      }, 3000);
    });

    // Append the alert box to the body
    document.body.appendChild(alertBox);

    // Automatically remove the alert after 3 seconds
    this.timeout = setTimeout(() => {
      alertBox.remove();
    }, 3000);
  }
}
window.CharmAlert = CharmAlert.getInstance();

/***/ }),

/***/ "./src/js/components/checkbox.js":
/*!***************************************!*\
  !*** ./src/js/components/checkbox.js ***!
  \***************************************/
/***/ (function() {

(function () {
  document.addEventListener("click", e => {
    if (e.target.closest(".switch-btn-wrapper")) {
      const btn = e.target.closest(".switch-btn-wrapper");
      const checkBox = btn.querySelector("input");
      const switchBtn = btn.querySelector(".switch-btn");
      checkBox.checked = !checkBox.checked;
      checkBox.checked ? btn.classList.add('on') : btn.classList.remove('on');
      //trigger change to the checkbox
      const changeEvent = new Event("change", {
        bubbles: true
      });
      checkBox.dispatchEvent(changeEvent);
    }
  });
})();

/***/ }),

/***/ "./src/js/components/danger-zone.js":
/*!******************************************!*\
  !*** ./src/js/components/danger-zone.js ***!
  \******************************************/
/***/ (function() {

(function ($) {
  const nonce = charming_portfolio_admin.erase_nonce;
  /**
   * confirm challenge flag to check if user already done the challenge
   */
  let confirmDone = false;
  document.addEventListener("click", function (e) {
    if (e.target && e.target.closest('.charming-portfolio-erase-data-btn')) {
      const eraseBtn = e.target.closest('.charming-portfolio-erase-data-btn');
      const pageWrapper = eraseBtn.closest('.section-danger-zone');
      const confirmModal = pageWrapper.querySelector('.erase-data-challange');
      $(confirmModal).slideDown();
    }
    if (e.target && e.target.closest('.cp-erase-data-cancel-btn')) {
      const cancelBtn = e.target.closest('.cp-erase-data-cancel-btn');
      const pageWrapper = cancelBtn.closest('.section-danger-zone');
      const confirmModal = pageWrapper.querySelector('.erase-data-challange');
      const inputField = confirmModal.querySelector('.erase-data-challange-input');
      const confirmBtn = confirmModal.querySelector('.cp-erase-data-confirm-btn');
      inputField.value = '';
      confirmBtn.setAttribute('disabled', 'disabled');
      $(confirmModal).slideUp();
    }
    if (e.target && e.target.closest('.cp-erase-data-confirm-btn')) {
      eraseData();
    }
  });
  document.addEventListener("keyup", function (e) {
    if (e.target && e.target.closest('.erase-data-challange-input')) {
      console.log('keyup detected');
      console.log(e.target.value);
      const confirmText = "cp/erase";
      if (e.target.value === confirmText) {
        const pageWrapper = e.target.closest('.section-danger-zone');
        const confirmBtn = pageWrapper.querySelector('.cp-erase-data-confirm-btn');
        confirmDone = true;
        confirmBtn.removeAttribute('disabled');
      }
    }
  });
  function eraseData() {
    if (!confirmDone) {
      CharmAlert.showAlert('Please complete the confirmation challenge.', 'error');
      return;
    }
    $.ajax({
      url: charming_portfolio_admin.ajax_url,
      type: 'POST',
      data: {
        action: 'charming_portfolio_erase_data',
        nonce: nonce
      },
      success: function (response) {
        if (response.success) {
          // alert('All data erased successfully.');
          CharmAlert.showAlert('All data erased successfully.', 'success');
          location.reload();
        } else {
          CharmAlert.showAlert('Error Erasing Data. Please Try Again.', 'error');
        }
      },
      error: function (xhr, status, error) {
        CharmAlert.showAlert('AJAX Error: ' + error, 'error');
      }
    });
  }
})(jQuery);

/***/ }),

/***/ "./src/js/components/leave-alert.js":
/*!******************************************!*\
  !*** ./src/js/components/leave-alert.js ***!
  \******************************************/
/***/ (function() {

document.addEventListener("input", e => charming_portfolio_input_update(true, e));
document.addEventListener("change", e => charming_portfolio_input_update(true, e));
window.is_cp_input_updated = false;
window.addEventListener("beforeunload", e => {
  console.log("beforeunload", window.is_cp_input_updated);
  if (window.is_cp_input_updated) {
    e.preventDefault();
    e.returnValue = '';
  }
});
(function () {
  window.charming_portfolio_input_update = function (state = true, e = null) {
    console.log("input updated", state);
    if (e) {
      if (!e.target.closest(".portfolio-section-wrapper")) return;
    }
    if (window.is_cp_input_updated === state) return;
    window.is_cp_input_updated = state;
  };
})();

/***/ }),

/***/ "./src/js/components/media.js":
/*!************************************!*\
  !*** ./src/js/components/media.js ***!
  \************************************/
/***/ (function() {

/**
 * Media Uploader
 */
(function ($) {
  class SimpleCharm_portfolio_Media {
    constructor() {
      this.init();
    }
    init() {
      this.mediaUploader('simplecharm-portfolio-user-image', "CHARMING_PORTFOLIO_user_image", "Upload Image");
      this.mediaUploader('simplecharm-portfolio-user-image2', "CHARMING_PORTFOLIO_user_image2", "Upload Another Image");
    }
    mediaUploader(picked_image, hidden_field, custom_text = 'Upload Image') {
      let image = null;
      $(`.${picked_image}`).on('keyup', function (e) {
        if ($(e.keyCode)[0] !== 13) return;
        e.target.click();
      });
      $(`.${picked_image}`).off('click').on('click', function (e) {
        e.preventDefault();
        if (wp.media) {
          wp.media.view.Modal.prototype.on('close', function () {
            const existingModal = $(".media-modal");
            if (existingModal) {
              existingModal.remove();
            }
          });
          image = wp.media({
            title: custom_text,
            multiple: false,
            // Set to true if you want to upload multiple files at once
            library: {
              type: 'image' // Only load image files
            }
          }).open().on('select', function () {
            // This will return the selected image from the Media Uploader, the result is an object
            let uploaded_image = image.state().get('selection').first();
            // Convert uploaded_image to a JSON object to make accessing it easier
            let image_url = uploaded_image.toJSON().url;
            // Assign the url value to the image and hidden input field
            $(`.${picked_image}`).attr("src", image_url);
            $(`.${hidden_field}`).val(image_url);
          });
          image.open();
          //  if (wp.media) {
          //     wp.media.view.Modal.prototype.on('open', function(data) {
          //         if(wp.media.frame.modal.clickedOpenerEl){
          //          jQuery( '.media-modal' ).remove();
          //         }
          //     });
          // }
        }
      });
    }
  }
  new SimpleCharm_portfolio_Media();
})(jQuery);

/***/ }),

/***/ "./src/js/components/media/experience-images.js":
/*!******************************************************!*\
  !*** ./src/js/components/media/experience-images.js ***!
  \******************************************************/
/***/ (function() {

/**
 * Special Media Uploader For Skills
 */
(function ($) {
  class SimpleCharm_portfolio_Media_Experience {
    constructor() {
      this.init();
    }
    init() {
      $(document).on("click", ".charming-portfolio-experience.admin img", function (e) {
        let custom_text = "Upload the brand logo of you experience company";
        const projectImage = $(this);
        const hiddenField = $(this).siblings("input[type=hidden]");
        const queue = hiddenField.data("queue");
        let image = null;
        projectImage.off('click').on('click', function (e) {
          e.preventDefault();
          if (wp.media) {
            wp.media.view.Modal.prototype.on('close', function () {
              const existingModal = $(".media-modal");
              if (existingModal) {
                existingModal.remove();
              }
            });
            image = wp.media({
              title: custom_text,
              multiple: false,
              // Set to true if you want to upload multiple files at once
              library: {
                type: 'image' // Only load image files
              }
            }).open().on('select', function () {
              // This will return the selected image from the Media Uploader, the result is an object
              let uploaded_image = image.state().get('selection').first();
              // Convert uploaded_image to a JSON object to make accessing it easier
              let image_url = uploaded_image.toJSON().url;
              // Assign the url value to the image and hidden input field
              projectImage.attr("src", image_url);
              hiddenField.val(image_url);
            });
            image.open();
          }
        });
      });
    }
  }
  new SimpleCharm_portfolio_Media_Experience();
})(jQuery);

/***/ }),

/***/ "./src/js/components/media/project-images.js":
/*!***************************************************!*\
  !*** ./src/js/components/media/project-images.js ***!
  \***************************************************/
/***/ (function() {

/**
 * Special Media Uploader For Skills
 */
(function ($) {
  class SimpleCharm_portfolio_Media_Projects {
    constructor() {
      this.init();
    }
    init() {
      $(document).on("click", ".charming-portfolio-projects.admin img", function (e) {
        let custom_text = "Upload Image for Thumbnail of The Project";
        const projectImage = $(this);
        const hiddenField = $(this).siblings("input[type=hidden]");
        const queue = hiddenField.data("queue");
        let image = null;
        projectImage.off('click').on('click', function (e) {
          e.preventDefault();
          if (wp.media) {
            wp.media.view.Modal.prototype.on('close', function () {
              const existingModal = $(".media-modal");
              if (existingModal) {
                existingModal.remove();
              }
            });
            image = wp.media({
              title: custom_text,
              multiple: false,
              // Set to true if you want to upload multiple files at once
              library: {
                type: 'image' // Only load image files
              }
            }).open().on('select', function () {
              // This will return the selected image from the Media Uploader, the result is an object
              let uploaded_image = image.state().get('selection').first();
              // Convert uploaded_image to a JSON object to make accessing it easier
              let image_url = uploaded_image.toJSON().url;
              // Assign the url value to the image and hidden input field
              projectImage.attr("src", image_url);
              hiddenField.val(image_url);
            });
            image.open();
          }
        });
      });
    }
  }
  new SimpleCharm_portfolio_Media_Projects();
})(jQuery);

/***/ }),

/***/ "./src/js/components/media/skills-images.js":
/*!**************************************************!*\
  !*** ./src/js/components/media/skills-images.js ***!
  \**************************************************/
/***/ (function() {

/**
 * Special Media Uploader For Skills
 */
(function ($) {
  class SimpleCharm_portfolio_Media_Skill {
    constructor() {
      this.init();
    }
    init() {
      $(document).on("click", ".charming-portfolio-skills.admin img", function (e) {
        let custom_text = "Upload Image for Logo of The Skill";
        const skillImage = $(this);
        const hiddenField = $(this).siblings("input[type=hidden]");
        const queue = hiddenField.data("queue");
        let image = null;
        skillImage.off('click').on('click', function (e) {
          e.preventDefault();
          if (wp.media) {
            wp.media.view.Modal.prototype.on('close', function () {
              const existingModal = $(".media-modal");
              if (existingModal) {
                existingModal.remove();
              }
            });
            image = wp.media({
              title: custom_text,
              multiple: false,
              // Set to true if you want to upload multiple files at once
              library: {
                type: 'image' // Only load image files
              }
            }).open().on('select', function () {
              // This will return the selected image from the Media Uploader, the result is an object
              let uploaded_image = image.state().get('selection').first();
              // Convert uploaded_image to a JSON object to make accessing it easier
              let image_url = uploaded_image.toJSON().url;
              // Assign the url value to the image and hidden input field
              skillImage.attr("src", image_url);
              hiddenField.val(image_url);
            });
            image.open();
          }
        });
      });
    }
  }
  new SimpleCharm_portfolio_Media_Skill();
})(jQuery);

/***/ }),

/***/ "./src/js/components/repeater.js":
/*!***************************************!*\
  !*** ./src/js/components/repeater.js ***!
  \***************************************/
/***/ (function() {

/**
 * Repeater Controll
 */
(function ($) {
  class Repeater {
    constructor() {
      this.init();
    }
    init() {
      this.handleRepeater("charming_portfolio_social_link_add", ['charming_portfolio_empty-row__social_link', 'screen-reader-text'], '#repeatable-fieldset-one tbody>tr', 'charming_portfolio_social_link_remove', 'social_link');
      this.handleRepeater("charming_portfolio_skill_link_add", ['charming_portfolio_empty-row__skills_link', 'screen-reader-text'], '#repeatable-fieldset-one tbody>tr', 'charming_portfolio_skills_remove', 'skills');
      this.handleRepeater("charming_portfolio_experience_add", ['charming_portfolio_empty-row__experience', 'screen-reader-text'], '#repeatable-fieldset-two tbody>tr', 'charming_portfolio_experience_remove', 'experiences');
      this.handleRepeater("charming_portfolio_work_add", ['charming_portfolio_empty-row__works', 'screen-reader-text'], '#repeatable-fieldset-three tbody>tr', 'charming_portfolio_project_remove', 'works');
      this.handleRepeater("charming_portfolio_header_link_add", ['charming_portfolio_empty-row__header_link', 'screen-reader-text'], '#repeatable-fieldset-header-links tbody>tr', 'charming_portfolio_header_link_remove', 'header_link');
      this.handleRepeater("charming_portfolio_footer_link_add", ['charming_portfolio_empty-row__footer_link', 'screen-reader-text'], '#repeatable-fieldset-footer-links tbody>tr', 'charming_portfolio_footer_link_remove', 'footer_link');
    }
    handleRepeater(addBtn, hiddenFields, insertBefore, removeBtn, dataName) {
      let queue = $(`${insertBefore}:nth-last-child(2) input`).data("queue");
      $(`#${addBtn}`).on('click', function () {
        queue++;
        queue = isNaN(queue) ? 1 : queue;
        let row = $(`.${hiddenFields.join(".")}`).clone(true).removeClass(hiddenFields.join(" "));
        if (row.hasClass("empty_blueprint")) {
          console.log("empty-blueprint removed");
          row.removeClass("empty_blueprint");
        }
        let newInputs = row.find('input, textarea');
        newInputs.each(function () {
          $(this).attr('data-queue', queue);
          let inputType = $(this)[0].className;
          $(this).attr('name', `CHARMING_PORTFOLIO[${dataName}][${queue}][][${inputType}]`);
          let inputId = $(this).attr("id");
          let LabelFor = $(this).siblings('label').attr('for');
          $(this).attr("id", `${inputId}-${queue}`);
          $(this).siblings('label').attr("for", `${LabelFor}-${queue}`);
        });
        row.insertBefore(`${insertBefore}:last-child`);
        return false;
      });
      $(`.${removeBtn}`).on('click', function () {
        $(this).parents('tr').remove();
        return false;
      });
    }
  }
  new Repeater();
})(jQuery);

/***/ }),

/***/ "./src/js/components/save-data.js":
/*!****************************************!*\
  !*** ./src/js/components/save-data.js ***!
  \****************************************/
/***/ (function() {

(function ($) {
  class Save_Data {
    constructor() {
      this.init();
    }
    init() {
      console.log("Initializing Save_Data", window.is_cp_input_updated);
      const saveButton = $(".charming-portfolio-save-data");
      const additionalSaveButton = $(".charming-portfolio-save-additional-data");
      if (saveButton.length) {
        saveButton.on('click', function (e) {
          e.preventDefault();
          const enabled = $(".portfolio-enabled");
          const contactMailingEnabled = $(".portfolio-enabled-contact-mailing");
          const blogEnabled = $(".portfolio-enabled-blog");
          const name = $(".user-name");
          const designation = $(".user-designation");
          const imagePrimary = $(".CHARMING_PORTFOLIO_user_image");
          const shortDescription = $(".short-description");
          const userAddress = $(".user-address");
          const userAvailable = $(".user-available");
          const description = $(".description");
          const primaryStateboxContent = $(".primary-statbox-content");
          const primaryStateboxLabel = $(".primary-statbox-label");
          const imageSecondary = $(".CHARMING_PORTFOLIO_user_image_2");
          const mail = $(".email");
          const phone = $(".phone");
          const layout = $(".charming-portfolio-layout input[type='radio']:checked").val() ?? 'charming_v2';
          const data = new FormData();
          data.append('action', 'charming_portfolio_save_data');
          data.append('nonce', charming_portfolio_admin.nonce);
          data.append('enabled', enabled.is(':checked') ? '1' : '0');
          data.append('enabled_blog', blogEnabled.is(':checked') ? '1' : '0');
          data.append('enabled_contact_mailing', contactMailingEnabled.is(':checked') ? '1' : '0');
          data.append('name', name.val());
          data.append('designation', designation.val());
          data.append('image', imagePrimary.val());
          data.append('short_description', shortDescription.val());
          data.append('address', userAddress.val());
          data.append('available', userAvailable.is(':checked') ? '1' : '0');
          data.append('description', description.val());
          data.append('primary_statbox_content', primaryStateboxContent.val());
          data.append('primary_statbox_label', primaryStateboxLabel.val());
          data.append('image2', imageSecondary.val());
          data.append('email', mail.val());
          data.append('phone', phone.val());
          data.append('layout', layout);

          // get social links 
          const socialLinks = [];
          $(".social_links").each(function () {
            const name = $(this).find(".name").val();
            const url = $(this).find(".url").val();
            if (name && url) {
              socialLinks.push({
                name: name,
                url: url
              });
            }
          });

          // get stat boxes 
          const statBoxes = [];
          $(".stat-boxes-table tr").each(function () {
            const content = $(this).find(".content").val();
            const label = $(this).find(".label").val();
            if (content || label) {
              statBoxes.push({
                content: content,
                label: label
              });
            }
          });
          const headerLinks = [];
          $(".header_links").each(function () {
            const name = $(this).find(".name").val();
            const url = $(this).find(".url").val();
            if (name && url) {
              headerLinks.push({
                name: name,
                url: url
              });
            }
          });
          const footerLinks = [];
          $(".footer_links").each(function () {
            const name = $(this).find(".name").val();
            const url = $(this).find(".url").val();
            if (name && url) {
              footerLinks.push({
                name: name,
                url: url
              });
            }
          });
          data.append('social_links', JSON.stringify(socialLinks));
          data.append('header_links', JSON.stringify(headerLinks));
          data.append('footer_links', JSON.stringify(footerLinks));
          data.append('stat_boxes', JSON.stringify(statBoxes));
          const updateBtnWrapper = $(".btn-wrapper");
          updateBtnWrapper.addClass("loading");
          updateBtnWrapper.find(".charming-portfolio-save-data").prop("disabled", true);
          updateBtnWrapper.find(".charming-portfolio-save-data").text(charming_portfolio_admin.saving);
          const response = $.ajax({
            url: charming_portfolio_admin.ajax_url,
            type: 'POST',
            data: data,
            contentType: false,
            processData: false,
            success: function (response) {
              if (response.success) {
                const data = response.data;
                updateBtnWrapper.removeClass("loading");
                updateBtnWrapper.find(".charming-portfolio-save-data").prop("disabled", false);
                updateBtnWrapper.find(".charming-portfolio-save-data").text(charming_portfolio_admin.save);
                charming_portfolio_input_update(false);
                console.log("is input updated?", window.is_cp_input_updated);
                CharmAlert.showAlert("Updated New Informations!", 'success');
              } else {
                updateBtnWrapper.removeClass("loading");
                updateBtnWrapper.find(".charming-portfolio-save-data").prop("disabled", false);
                updateBtnWrapper.find(".charming-portfolio-save-data").text(charming_portfolio_admin.save);
                CharmAlert.showAlert(`Error: ${response.message}`, 'error');
              }
            },
            error: function () {
              updateBtnWrapper.removeClass("loading");
              updateBtnWrapper.find(".charming-portfolio-save-data").prop("disabled", false);
              updateBtnWrapper.find(".charming-portfolio-save-data").text(charming_portfolio_admin.save);
              CharmAlert.showAlert("Error updating", 'error');
            }
          });
        });
      }
      if (additionalSaveButton.length) {
        additionalSaveButton.on('click', function (e) {
          e.preventDefault();
          try {
            const skills = $(".charming-portfolio-skills .skill");
            const experiences = $(".charming-portfolio-experience .single-experience");
            const projects = $(".charming-portfolio-projects .single-project");
            const skillsData = [];
            skills.each(function (index) {
              if ($(this).hasClass("empty_blueprint")) {
                console.log("skipping empty blueprint");
                return;
              }
              if (!$(this).hasClass("empty_blueprint")) {
                console.log("not empty blueprint");
                const skillName = $(this).find(".name").val();
                const skillImageUrl = $(this).find(".image-url").val();
                const skillDescription = $(this).find(".description").val();
                const skillTags = $(this).find(".tags").val();
                if (skillName && skillImageUrl) {
                  skillsData.push({
                    name: skillName,
                    image: skillImageUrl,
                    description: skillDescription,
                    tags: skillTags
                  });
                } else {
                  throw new Error(`Skill ${index + 1}: Please fill all required fields (Name, Image URL)`);
                }
              }
            });
            const experiencesData = [];
            experiences.each(function () {
              const logo = $(this).find(".image-url").val();
              const institution = $(this).find(".institution").val();
              const postTitle = $(this).find(".post-title").val();
              const responsibility = $(this).find(".responsibility").val();
              const startDate = $(this).find(".start_date").val();
              const endDate = $(this).find(".end_date").val();
              const stillWorking = $(this).find(".working").is(':checked') ? '1' : '0';
              if ($(this).hasClass("empty_blueprint")) {
                console.log("skipping empty blueprint");
                return;
              }
              if (institution && postTitle && responsibility && startDate) {
                experiencesData.push({
                  logo: logo,
                  institution: institution,
                  post_title: postTitle,
                  responsibility: responsibility,
                  start_date: startDate,
                  end_date: endDate,
                  working: stillWorking
                });
              } else {
                console.log("Experience data missing", {
                  institution,
                  postTitle,
                  responsibility,
                  startDate
                });
                throw new Error(`Experience ${institution || postTitle || responsibility || startDate}: Please fill all required fields (Institution, Post Title, Responsibility, Start Date)`);
              }
            });
            const projectsData = [];
            projects.each(function () {
              if ($(this).hasClass("empty_blueprint")) {
                console.log("skipping empty blueprint");
                return;
              }
              const projectName = $(this).find(".title").val();
              const imageUrl = $(this).find(".image-url").val();
              const projectDescription = $(this).find(".description").val();
              const projectTags = $(this).find(".tags").val();
              const projectLink = $(this).find(".link").val();
              const projectCategory = $(this).find(".category").val();
              if (projectName && projectDescription && projectLink) {
                projectsData.push({
                  image_url: imageUrl,
                  title: projectName,
                  description: projectDescription,
                  tags: projectTags,
                  link: projectLink,
                  category: projectCategory
                });
              } else {
                throw new Error(`Project ${projectName || projectDescription || projectLink}: Please fill all required fields (Name, Description, Link)`);
              }
            });
            const data = new FormData();
            data.append('action', 'charming_portfolio_save_data_additional');
            data.append('nonce', charming_portfolio_admin.nonce);
            data.append('skills', JSON.stringify(skillsData));
            data.append("experiences", JSON.stringify(experiencesData));
            data.append("works", JSON.stringify(projectsData));
            const updateBtnWrapper = $(".btn-wrapper");
            updateBtnWrapper.addClass("loading");
            updateBtnWrapper.find(".charming-portfolio-save-additional-data").prop("disabled", true);
            updateBtnWrapper.find(".charming-portfolio-save-additional-data").text(charming_portfolio_admin.saving);
            const response = $.ajax({
              url: charming_portfolio_admin.ajax_url,
              type: 'POST',
              data: data,
              contentType: false,
              processData: false,
              success: function (response) {
                if (response.success) {
                  CharmAlert.showAlert("Informations updated successfully", 'success');
                  // this.resetUpdateBtn(updateBtnWrapper);
                  updateBtnWrapper.removeClass("loading");
                  updateBtnWrapper.find(".charming-portfolio-save-additional-data").prop("disabled", false);
                  charming_portfolio_input_update(false);
                } else {
                  CharmAlert.showAlert(response.message, 'error');
                  // this.resetUpdateBtn(updateBtnWrapper);
                  updateBtnWrapper.removeClass("loading");
                  updateBtnWrapper.find(".charming-portfolio-save-additional-data").prop("disabled", false);
                }
              },
              error: function () {
                CharmAlert.showAlert("Error Updating Information. Please Try Again", 'error');
                // this.resetUpdateBtn(updateBtnWrapper);
                updateBtnWrapper.removeClass("loading");
                updateBtnWrapper.find(".charming-portfolio-save-additional-data").prop("disabled", false);
              }
            });
          } catch (err) {
            CharmAlert.showAlert(err, 'error');
          }
        });
      }
    }
  }
  new Save_Data();
})(jQuery);

/***/ }),

/***/ "./src/js/components/updateBtn.js":
/*!****************************************!*\
  !*** ./src/js/components/updateBtn.js ***!
  \****************************************/
/***/ (function() {

// Add Loader When Update Button Clicked
// const updateBtnWrapper = document.querySelector(".btn-wrapper")
// if(updateBtnWrapper){
// 	const updateBtn = updateBtnWrapper.querySelector("input");
// 	updateBtn.addEventListener("click", (e) => {
// 		updateBtnWrapper.classList.add("loading")
// 	})		
// }

/***/ }),

/***/ "./src/sass/admin/admin.scss":
/*!***********************************!*\
  !*** ./src/sass/admin/admin.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/admin.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_admin_admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/admin/admin.scss */ "./src/sass/admin/admin.scss");
/* harmony import */ var _components_media_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/media.js */ "./src/js/components/media.js");
/* harmony import */ var _components_media_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_media_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_repeater_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/repeater.js */ "./src/js/components/repeater.js");
/* harmony import */ var _components_repeater_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_repeater_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_admin_experience_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin-experience.js */ "./src/js/components/admin-experience.js");
/* harmony import */ var _components_admin_experience_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_admin_experience_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_admin_help_icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin-help-icon.js */ "./src/js/components/admin-help-icon.js");
/* harmony import */ var _components_admin_help_icon_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_admin_help_icon_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_checkbox_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/checkbox.js */ "./src/js/components/checkbox.js");
/* harmony import */ var _components_checkbox_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_checkbox_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_updateBtn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/updateBtn.js */ "./src/js/components/updateBtn.js");
/* harmony import */ var _components_updateBtn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_updateBtn_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_admin_tab_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin-tab.js */ "./src/js/components/admin-tab.js");
/* harmony import */ var _components_admin_tab_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_admin_tab_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_leave_alert_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/leave-alert.js */ "./src/js/components/leave-alert.js");
/* harmony import */ var _components_leave_alert_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_leave_alert_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_charm_alert_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/charm-alert.js */ "./src/js/components/charm-alert.js");
/* harmony import */ var _components_charm_alert_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_charm_alert_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_save_data_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/save-data.js */ "./src/js/components/save-data.js");
/* harmony import */ var _components_save_data_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_save_data_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_media_skills_images_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/media/skills-images.js */ "./src/js/components/media/skills-images.js");
/* harmony import */ var _components_media_skills_images_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_media_skills_images_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_media_project_images_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/media/project-images.js */ "./src/js/components/media/project-images.js");
/* harmony import */ var _components_media_project_images_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_media_project_images_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_media_experience_images_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/media/experience-images.js */ "./src/js/components/media/experience-images.js");
/* harmony import */ var _components_media_experience_images_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_media_experience_images_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_danger_zone_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/danger-zone.js */ "./src/js/components/danger-zone.js");
/* harmony import */ var _components_danger_zone_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_danger_zone_js__WEBPACK_IMPORTED_MODULE_14__);












// media modal on repeater




// danger zone

}();
/******/ })()
;
//# sourceMappingURL=admin.js.map