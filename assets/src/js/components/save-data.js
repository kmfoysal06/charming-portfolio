(function ($) {
    class Save_Data {
        constructor() {
            this.init();
        }
        init() {
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
                    const imageSecondary = $(".CHARMING_PORTFOLIO_user_image_2");
                    const mail = $(".email");
                    const phone = $(".phone");
                    const layout = $(".charming-portfolio-layout input[type='radio']:checked").val() ?? 'charming_v2';


                    const data = new FormData();
                    data.append('action', 'charming_portfolio_save_data')
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
                                CharmAlert.showAlert("Updated", 'success');
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
                })
            }
            if(additionalSaveButton.length) {
                additionalSaveButton.on('click', function(e) {
                    e.preventDefault();
                    const skills = $(".charming-portfolio-skills .skill");
                    const experiences = $(".charming-portfolio-experience .single-experience");
                    const projects = $(".charming-portfolio-projects .single-project");
                    // console.log(skills)
                    
                    const skillsData = [];
                    skills.each(function() {
                        const skillName = $(this).find(".name").val();
                        const skillImageUrl = $(this).find(".image-url").val();
                        
                        if(skillName && skillImageUrl) {
                            skillsData.push({
                                name: skillName,
                                image: skillImageUrl
                            });
                        }
                    });

                    const experiencesData = [];
                    experiences.each(function() {
                        const logo = $(this).find(".image-url").val();
                        const institution = $(this).find(".institution").val();
                        const postTitle = $(this).find(".post-title").val();
                        const responsibility = $(this).find(".responsibility").val();
                        const startDate = $(this).find(".start_date").val();
                        const endDate = $(this).find(".end_date").val();
                        const stillWorking = $(this).find(".working").is(':checked') ? '1' : '0';

                        if(institution && postTitle && responsibility && startDate) {
                            experiencesData.push({
                                logo: logo,
                                institution: institution,
                                post_title: postTitle,
                                responsibility: responsibility,
                                start_date: startDate,
                                end_date: endDate,
                                working: stillWorking
                            });
                        }
                    });
                    const projectsData = [];
                    projects.each(function() {
                        const projectName = $(this).find(".title").val();
                        const imageUrl = $(this).find(".image-url").val();
                        const projectDescription = $(this).find(".description").val();
                        const projectTags = $(this).find(".tags").val();
                        const projectLink = $(this).find(".link").val();
                        
                        
                        if(projectName && projectDescription && projectTags && projectLink) {
                            projectsData.push({
                                image_url: imageUrl,
                                title: projectName,
                                description: projectDescription,
                                tags: projectTags,
                                link: projectLink
                            });
                        }
                        // console.log(projectName);
                        // console.log(projectDescription);
                        // console.log(projectTags);
                        // console.log(projectLink);
                    });
                    console.log(projectsData)
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

                    const response = $.ajax(
                        {
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
                                    
                                } else {
                                    CharmAlert.showAlert(response.message, 'error');
                                    // this.resetUpdateBtn(updateBtnWrapper);
                                    updateBtnWrapper.removeClass("loading");
                                    updateBtnWrapper.find(".charming-portfolio-save-additional-data").prop("disabled", false);
                                }
                            },
                            error: function () {
                                CharmAlert.showAlert("Error saving skills", 'error');
                                // this.resetUpdateBtn(updateBtnWrapper);
                                updateBtnWrapper.removeClass("loading");
                                    updateBtnWrapper.find(".charming-portfolio-save-additional-data").prop("disabled", false);
                            }
                        }
                    )
                })
            }
        }
    }
    new Save_Data();
})(jQuery);
