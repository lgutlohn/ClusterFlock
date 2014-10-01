

var element = document.getElementById('drop1'),
    x = 0, y = 0;

interact(element)
    .draggable(true)
    .snap({
        mode: 'grid',
        grid: { x: 30, y: 30 },
        range: Infinity,
        elementOrigin: { x: 0, y: 0 }
    }) 
    .on('dragmove', function (event) {
        x += event.dx;
        y += event.dy;

        event.target.style.webkitTransform =
        event.target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';
    })
    .inertia(true)
    .restrict({
        drag: .dropzone,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
        endOnly: true
    });

