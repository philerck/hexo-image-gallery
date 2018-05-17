'use strict';

hexo.extend.helper.register('hexoImageGallery', function (args) {

  var bilder = args;;
  var gallery;

  gallery = '<div id="lightgallery">\n';
    bilder.forEach(function(photo, i){
        gallery += '<a href="'+ photo[0] +'.jpg" data-sub-html="'+ photo[2] +'" />\n';
        gallery += '<img src="'+ photo[1] +'.jpg" />\n';
        gallery += '</a>\n';
    });

  gallery += '</div>';

  return gallery;

});
