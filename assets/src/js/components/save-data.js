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
                    data.append('action', 'charming_portfolio_save_data')
                    data.append('nonce', charming_portfolio_admin.nonce);
                    data.append('enabled', enabled.is(':checked') ? '1' : '0');
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
                })
            }
            if(additionalSaveButton.length) {
                additionalSaveButton.on('click', function(e) {
                    e.preventDefault();
                    try {
                        const skills = $(".charming-portfolio-skills .skill");
                        const experiences = $(".charming-portfolio-experience .single-experience");
                        const projects = $(".charming-portfolio-projects .single-project");

                        const skillsData = [];
                        skills.each(function(index) {
                            if($(this).hasClass("empty_blueprint")) {
                                console.log("skipping empty blueprint");
                                return;
                            }
                            if(!$(this).hasClass("empty_blueprint")) {
                                console.log("not empty blueprint");
                                const skillName = $(this).find(".name").val();
                                const skillImageUrl = $(this).find(".image-url").val();
                                const skillDescription = $(this).find(".description").val();
                                const skillTags = $(this).find(".tags").val();
                                
                                if(skillName && skillImageUrl) {
                                    skillsData.push({
                                        name: skillName,
                                        image: skillImageUrl,
                                        description: skillDescription,
                                        tags: skillTags
                                    });
                                }else{
                                    throw new Error(`Skill ${index + 1}: Please fill all required fields (Name, Image URL)`);
                                }
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

                            if($(this).hasClass("empty_blueprint")) {
                                console.log("skipping empty blueprint");
                                return;
                            }
    
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
                            }else{
                                console.log("Experience data missing", { institution, postTitle, responsibility, startDate });
                                throw new Error(`Experience ${institution || postTitle || startDate}: Please fill all required fields (Institution, Post Title, Responsibility, Start Date)`);
                            }
                        });
                        const projectsData = [];
                        projects.each(function() {
                            if($(this).hasClass("empty_blueprint")){
                                console.log("skipping empty blueprint");
                                return;
                            }
                            const projectName = $(this).find(".title").val();
                            const imageUrl = $(this).find(".image-url").val();
                            const projectDescription = $(this).find(".description").val();
                            const projectTags = $(this).find(".tags").val();
                            const projectLink = $(this).find(".link").val();
                            const projectCategory = $(this).find(".category").val();
                            
                            
                            if(projectName && projectDescription && projectLink) {
                                projectsData.push({
                                    image_url: imageUrl,
                                    title: projectName,
                                    description: projectDescription,
                                    tags: projectTags,
                                    link: projectLink,
                                    category: projectCategory
                                });
                            }else{
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
                            }
                        )
                }catch(err) {
                    CharmAlert.showAlert(err, 'error');
                }
                })
            }
        }
    }
    new Save_Data();
})(jQuery);
