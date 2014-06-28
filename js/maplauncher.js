$(document).ready(function () {
    $("#madrid").click(function () {
        $('#madrid-modal').modal({
            overlayClose: true,
            minHeight: 480,
            minWidth: 640,
            onOpen: function (dialog) {
                dialog.overlay.fadeIn('fast', function () {
                    dialog.data.hide();
                    dialog.container.fadeIn('fast', function () {
                        dialog.data.slideDown('fast');
                    });
                });
            },
            onClose: function (dialog) {
                dialog.data.slideUp('slow', function () {
                    dialog.overlay.fadeOut('slow', function () {
                        $.modal.close();
                    })
                })
            }
        }); // modal
        return false;
    }); // launcher
});