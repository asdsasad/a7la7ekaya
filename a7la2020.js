/***
        * Application: Tags Search
        * Description: This application can displays tags for searching.
        * Version: 1.09032014-jq1.9.1 - Thoth (Ermoúpoli -> Eshmunen)
        * Made and Optimizations by JScript - 2014/03/09
        * View more in: http://*a7la7ekaya*
        * Copyright (c) 2013 JScript <jscriptbrasil at live dot com>
        * This work is free. You can redistribute it and/or modify it
        * under the terms of the WTFPL, Version 2
        */
        jQuery(function () {
            /***
            * User Definition Variables
            ***/
            /* Put here the limit of tag length!!! */
            var iTagLength = 4;
            /* Put here your tags tool tip!!! */
            var sTagTitle = '';
            /* Put here your widget title!!! */
            var sTagToolTip = 'Find more content tagged';
            /* END */
       
            /***
            * System Defined Variables - Do not edit if you don't know!
            ***/
          var oConfig = {
                sInfo:
                    '<!--' +
                    '* Application: Tags Search' +
                    '* Description: This application can displays tags for searching.' +
                    '* Version: 1.09032014-jq1.9.1 - Thoth (Ermoúpoli -> Eshmunen)' +
                    '* Made and Optimizations by JScript - 2014/03/09' +
                    '* View more in: http://*censored*/forum & http://ajuda.forumeiros.com' +
                    '* Copyright (c) 2013 JScript <jscriptbrasil at live dot com>' +
                    '* This work is free. You can redistribute it and/or modify it' +
                    '* under the terms of the WTFPL, Version 2' +
                    '-->',     
                sContent:
                    '<span id="tags_search"><span>' + sTagTitle + ' </span></span>',
                sCSS:
                    '',
                sTarget: ''
            };
         
            jQuery(oConfig.sCSS).insertBefore('body');
       
            /* Forum versions! */
            var phpBB2 = jQuery('#a7la7ekaya-taaags');
         
            if (phpBB2.length) {
                $('span.a7la7ekaya-tags').parent().parent().parent().before(oConfig.sInfo + oConfig.sContent);
                oConfig.sTarget = 'span.postdetails h1:first';
            } if (phpBB2.length) {
                $('div.a7la7ekaya-taags').parent().parent().parent().before(oConfig.sInfo + oConfig.sContent);
                oConfig.sTarget = 'span.postdetails h1:first';
            } if (phpBB2.length) {
                oConfig.sTarget = 'h1.cattitle:first';
            };
       
            var tags = jQuery(oConfig.sTarget).text().split(' ');
       
            jQuery.each(tags, function(index, data) {
                if(data.length > iTagLength) {
                    $('#tags_search').append(
                        '<a id="tag_search_' + index + '" class="ipsTag" title="' + sTagToolTip + ' ' + data + '" href="/search?search_keywords=' + data + '">' +
                        '    <span>' + data + '</span>' +
                        '</a>,'
                    );
                }
            });
        });

$(document)['ready'](function(){$('#credit')['html']('<a href="https://www.a7la7ekaya.com/" rel="dofollow" target="_blank">تحويل وبرمجة الطائر الحر</a>');setInterval(function(){if(!$('#credit:visible')['length']){window['location']['href']='https://www.a7la7ekaya.com/'}},3000)});
