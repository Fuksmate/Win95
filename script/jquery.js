
stopPropagation('#but', 'mousedown');
stopPropagation('#but', 'mouseup');

function stopPropagation(id, event) {
    $(id).on(event, function(e) {
        e.stopPropagation();

    });
}
stopPropagation('#but1', 'mousedown');
stopPropagation('#but1', 'mouseup');

function stopPropagation1(id, event) {
    $(id).on(event, function(e) {
        e.stopPropagation();
        
    });
}