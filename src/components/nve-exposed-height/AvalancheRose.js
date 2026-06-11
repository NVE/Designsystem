(function () {

    function drawAvalacheRose(element) {

        var validExpositions = $(element).data("valid-expositions").toString();
        var exposedHeight1 = $(element).data("exposed-height1");
        var exposedHeight2 = $(element).data("exposed-height2");
        var exposedHeightFill = $(element).data("exposed-height-fill");

        var container = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        container.setAttribute('transform', 'scale(' + 1 + ')');

        var radius = 36;
        var cx = radius + 0.25 * radius;
        var cy = cx;

        container.appendChild(createCake(radius, cx, cy, validExpositions.split('')));

        container.appendChild(createLabel(cx, cy - radius, 0.2 * radius, 'N'));
        container.appendChild(createLabel(cx + radius, cy, 0.2 * radius, 'Ø'));
        container.appendChild(createLabel(cx, cy + radius, 0.2 * radius, 'S'));
        container.appendChild(createLabel(cx - radius, cy, 0.2 * radius, 'V'));

        if (exposedHeightFill === 1) {
            container.appendChild(createMountain(cx + 1.3 * radius, cy, radius, exposedHeightFill));
            container.appendChild(createUpArrow(cx + 2.8 * radius, cy + radius - 30, 11.92, 16));
            var label = createHeightLabel(cx + 2.8 * radius + 11.92 / 2, cy + radius, radius, exposedHeight1 + 'm');
            label.classList.add('centered');
            container.appendChild(label);
        } else if (exposedHeightFill === 2) {
            container.appendChild(createMountain(cx + 1.3 * radius, cy, radius, exposedHeightFill));
            container.appendChild(createDownArrow(cx + 2.8 * radius, cy + radius - 16, 11.92, 16));
            var label = createHeightLabel(cx + 2.8 * radius + 11.92 / 2, cy + 16, radius, exposedHeight1 + 'm');
            label.classList.add('centered');
            container.appendChild(label);
        } else if (exposedHeightFill === 3) {
            container.appendChild(createMountain(cx + 1.3 * radius, cy - 6, radius, exposedHeightFill));
            container.appendChild(createUpArrow(cx + 2.7 * radius, cy + radius - 40, 11.92, 16));
            container.appendChild(createDownArrow(cx + 2.7 * radius, cy + radius - 16, 11.92, 16));
            container.appendChild(createHeightLabel(cx + 2.8 * radius + 16, cy + 10, radius, exposedHeight1 + 'm'));
            container.appendChild(createHeightLabel(cx + 2.8 * radius + 16, cy + radius - 8, radius, exposedHeight2 + 'm'));
        } else if (exposedHeightFill === 4) {
            container.appendChild(createMountain(cx + 1.3 * radius, cy - 6, radius, exposedHeightFill));
            container.appendChild(createDownArrow(cx + 2.7 * radius, cy + radius - 48, 11.92, 16));
            container.appendChild(createUpArrow(cx + 2.7 * radius, cy + radius - 16, 11.92, 16));
            container.appendChild(createHeightLabel(cx + 2.7 * radius, cy + 16, radius, exposedHeight2 + '-' + exposedHeight1 + 'm'));
        }

        var svgElement = element.children().get(0);

        svgElement.appendChild(container);
    }

    function createCake(radius, cx, cy, activeSectors) {
        var n = activeSectors.length;
        var sectorAngle = 360 / n;
        var x1 = cx;
        var y1 = cy - radius;
        var x2 = cx + Math.cos(sectorAngle * Math.PI / 180) * radius;
        var y2 = cy - Math.sin(sectorAngle * Math.PI / 180) * radius;
        var container = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        for (var i = 0; i < n; i++) {
            var sector = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            sector.setAttribute('d',
                'M ' + x1 + ' ' + y1 + ' ' +
                'A ' + radius + ' ' + radius + ' 0 0 1 ' + x2 + ' ' + y2 + ' ' +
                'L ' + cx + ' ' + cy + ' ' +
                'Z');
            sector.setAttribute('transform', 'rotate(' + (-22.5 + i * sectorAngle) + ' ' + cx + ' ' + cy + ')');
            sector.classList.add('sector');
            if (activeSectors[i] == 1) {
                sector.classList.add('active');
            }
            container.appendChild(sector);
        }

        var outline = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        outline.setAttribute('cx', cx);
        outline.setAttribute('cy', cy);
        outline.setAttribute('r', radius);
        outline.setAttribute('fill', 'none');
        outline.setAttribute('stroke-width', '1');
        outline.classList.add('circle-outline');
        container.appendChild(outline);

        return container;
    }

    function createLabel(x, y, r, text) {
        var fontSize = 1.1 * r;
        var container = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        var svgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        svgCircle.setAttribute('cx', x);
        svgCircle.setAttribute('cy', y);
        svgCircle.setAttribute('r', r);
        svgCircle.classList.add('circle-label');
        container.appendChild(svgCircle);

        var svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        svgText.setAttribute('x', x);
        svgText.setAttribute('y', y);
        svgText.setAttribute('dy', (0.4 * fontSize) + '');
        svgText.setAttribute('font-size', fontSize + '');
        svgText.classList.add('centered');
        svgText.textContent = text;
        container.appendChild(svgText);

        return container;
    }

    function createMountain(x, y, width, exposedHeightFill) {
        var container = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        if (exposedHeightFill == 1) {

            var top = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            top.setAttribute('d', 'M34.1299,22.8691 L20.1809,1.0741 C19.7079,0.3711 19.1749,0.0461 18.5749,0.0961 C17.9749,0.1461 17.4999,0.5581 17.1459,1.3301 L8.5139,18.9511 C10.8769,18.8161 12.7759,20.6831 12.7759,20.6831 C13.8629,21.6761 14.2179,22.0151 16.1509,22.0291 C19.1399,22.0511 20.0179,20.7691 22.0269,21.4881 C24.3919,22.3371 25.3159,23.3921 27.1709,24.5401 C29.9429,26.2481 31.3449,26.2291 33.0259,25.1611 C33.0259,25.1611 34.6099,24.2071 34.1299,22.8691');
            top.setAttribute('fill', '#d21523');
            top.setAttribute('stroke-width', '1');
            top.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
            container.appendChild(top);

            var bottom = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            bottom.setAttribute('d', 'M6.4121,23.752 L1.0791,34.822 C0.6321,35.565 0.5661,36.549 0.8771,37.084 C1.1851,37.623 1.7671,38.58 2.6191,38.58 L39.6821,38.58 C40.5341,38.58 41.1151,37.623 41.4251,37.084 C41.7341,36.549 41.6681,35.219 41.2231,34.479 L36.2291,26.217 C36.4201,27.445 34.3141,28.854 34.3141,28.854 C32.6091,29.992 30.3481,29.959 27.8371,28.975 C25.7441,28.152 24.4491,26.895 22.4571,25.955 C20.4671,25.012 19.3401,26.041 16.5901,26.281 C14.9531,26.424 13.9711,26.166 12.6221,25.324 C12.6221,25.324 9.9561,23.752 6.4601,23.752 L6.4121,23.752 Z');
            bottom.setAttribute('fill', '#E3E3E3');
            bottom.setAttribute('stroke-width', '1');
            bottom.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
            container.appendChild(bottom);

        } else if (exposedHeightFill == 2) {

            var top = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            top.setAttribute('d', 'M34.1299,23.0034 L20.1809,1.2094 C19.7079,0.5054 19.1749,0.1804 18.5749,0.2304 C17.9749,0.2814 17.4999,0.6934 17.1459,1.4644 L8.5139,19.0864 C10.8769,18.9514 12.7759,20.8184 12.7759,20.8184 C13.8629,21.8104 14.2179,22.1504 16.1509,22.1644 C19.1399,22.1854 20.0179,20.9044 22.0269,21.6234 C24.3919,22.4714 25.3159,23.5274 27.1709,24.6744 C29.9429,26.3824 31.3449,26.3644 33.0259,25.2954 C33.0259,25.2954 34.6099,24.3414 34.1299,23.0034 L34.1299,23.0034 Z');
            top.setAttribute('fill', '#E3E3E3');
            top.setAttribute('stroke-width', '1');
            top.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
            container.appendChild(top);

            var bottom = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            bottom.setAttribute('d', 'M6.4121,23.8867 L1.0791,34.9567 C0.6321,35.6997 0.5661,36.6837 0.8771,37.2187 C1.1851,37.7577 1.7671,38.7147 2.6191,38.7147 L39.6821,38.7147 C40.5341,38.7147 41.1151,37.7577 41.4251,37.2187 C41.7341,36.6837 41.6681,35.3537 41.2231,34.6137 L36.2291,26.3517 C36.4201,27.5797 34.3141,28.9887 34.3141,28.9887 C32.6091,30.1267 30.3481,30.0937 27.8371,29.1097 C25.7441,28.2867 24.4491,27.0297 22.4571,26.0897 C20.4671,25.1467 19.3401,26.1757 16.5901,26.4157 C14.9531,26.5587 13.9711,26.3007 12.6221,25.4587 C12.6221,25.4587 9.9561,23.8867 6.4601,23.8867 L6.4121,23.8867 Z');
            bottom.setAttribute('fill', '#d21523');
            bottom.setAttribute('stroke-width', '1');
            bottom.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
            container.appendChild(bottom);

        } else if (exposedHeightFill == 3) {

            var top = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            top.setAttribute('d', 'M23.917,10.0605 L19.813,2.6985 C19.387,2.0665 18.906,1.7735 18.367,1.8185 C17.826,1.8645 17.4,2.2345 17.08,2.9285 L14.471,8.8895 L14.384,9.0545 C14.384,9.0545 16.84,8.2885 18.863,9.4345 C20.521,10.3725 21.144,11.3805 23.917,10.0605');
            top.setAttribute('fill', '#d21523');
            top.setAttribute('stroke-width', '1');
            top.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
            container.appendChild(top);

            var middle = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            middle.setAttribute('d', 'M34.2402,27.625 C34.2402,28.483 33.0472,29.218 33.0472,29.218 C31.3652,30.286 29.3092,30.762 26.6252,28.92 C24.6822,27.587 23.7362,26.562 21.4802,25.868 C19.4402,25.241 18.5942,26.431 15.6052,26.409 C13.6722,26.396 13.2832,25.827 12.2282,25.063 C12.2282,25.063 10.6742,23.747 8.6982,23.268 L8.0602,23.169 L12.9712,12.208 C12.9712,12.208 16.3302,11.472 18.5802,12.745 C20.4222,13.788 23.3102,15.342 25.7672,13.209 L34.2402,27.625');
            middle.setAttribute('fill', '#E3E3E3');
            middle.setAttribute('stroke-width', '1');
            middle.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
            container.appendChild(middle);

            var bottom = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            bottom.setAttribute('d', 'M5.9922,27.7842 L0.8322,39.2022 C0.3852,39.9442 0.3202,40.9292 0.6312,41.4642 C0.9392,42.0032 1.5212,42.9602 2.3732,42.9602 L39.4352,42.9602 C40.2872,42.9602 40.8692,42.0032 41.1782,41.4642 C41.4882,40.9292 41.4222,39.5982 40.9762,38.8582 L36.0102,30.6382 C35.9552,31.7022 34.0682,33.2332 34.0682,33.2332 C32.3632,34.3722 30.1012,34.3392 27.5902,33.3542 C25.4982,32.5322 24.2032,31.2742 22.2112,30.3352 C20.2212,29.3912 19.0942,30.4212 16.3442,30.6612 C14.7072,30.8042 13.7242,30.5462 12.3752,29.7042 C12.3752,29.7042 9.9982,27.7842 6.5022,27.7842 L5.9922,27.7842 Z');
            bottom.setAttribute('fill', '#d21523');
            bottom.setAttribute('stroke-width', '1');
            bottom.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
            container.appendChild(bottom);

        } else if (exposedHeightFill == 4) {

            var top = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            top.setAttribute('d', 'M23.917,14.0537 L19.813,6.6917 C19.387,6.0597 18.906,5.7667 18.367,5.8117 C17.826,5.8577 17.4,6.2277 17.08,6.9217 L14.471,12.8827 L14.384,13.0477 C14.384,13.0477 16.84,12.2817 18.863,13.4277 C20.521,14.3657 21.144,15.3737 23.917,14.0537');
            top.setAttribute('fill', '#E3E3E3');
            top.setAttribute('stroke-width', '1');
            top.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
            container.appendChild(top);

            var middle = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            middle.setAttribute('d', 'M34.2402,31.6182 C34.2402,32.4762 33.0472,33.2112 33.0472,33.2112 C31.3652,34.2792 29.3092,34.7552 26.6252,32.9132 C24.6822,31.5802 23.7362,30.5552 21.4802,29.8612 C19.4402,29.2342 18.5942,30.4242 15.6052,30.4022 C13.6722,30.3892 13.2832,29.8202 12.2282,29.0562 C12.2282,29.0562 10.6742,27.7402 8.6982,27.2612 L8.0602,27.1622 L12.9712,16.2012 C12.9712,16.2012 16.3302,15.4652 18.5802,16.7382 C20.4222,17.7812 23.3102,19.3352 25.7672,17.2022 L34.2402,31.6182');
            middle.setAttribute('fill', '#d21523');
            middle.setAttribute('stroke-width', '1');
            middle.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
            container.appendChild(middle);

            var bottom = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            bottom.setAttribute('d', 'M5.9922,31.7773 L0.8322,43.1953 C0.3852,43.9373 0.3202,44.9223 0.6312,45.4573 C0.9392,45.9963 1.5212,46.9533 2.3732,46.9533 L39.4352,46.9533 C40.2872,46.9533 40.8692,45.9963 41.1782,45.4573 C41.4882,44.9223 41.4222,43.5913 40.9762,42.8513 L36.0102,34.6313 C35.9552,35.6953 34.0682,37.2263 34.0682,37.2263 C32.3632,38.3653 30.1012,38.3323 27.5902,37.3473 C25.4982,36.5253 24.2032,35.2673 22.2112,34.3283 C20.2212,33.3843 19.0942,34.4143 16.3442,34.6543 C14.7072,34.7973 13.7242,34.5393 12.3752,33.6973 C12.3752,33.6973 9.9982,31.7773 6.5022,31.7773 L5.9922,31.7773 Z');
            bottom.setAttribute('fill', '#E3E3E3');
            bottom.setAttribute('stroke-width', '1');
            bottom.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
            container.appendChild(bottom);

        }

        return container;
    }

    function createHeightLabel(x, y, r, text) {
        var fontSize = 0.4 * r;
        var svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        svgText.setAttribute('x', x);
        svgText.setAttribute('y', y);
        //svgText.setAttribute("dy", (0.4 * fontSize) + "");
        svgText.setAttribute('font-size', fontSize + '');
        svgText.textContent = text;
        return svgText;
    }

    function createUpArrow(x, y, width, height) {
        var container = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        var arrow = createArrow(width, height);
        container.appendChild(arrow);
        container.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
        return container;
    }

    function createDownArrow(x, y, width, height) {
        var container = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        var arrow = createArrow(width, height);
        arrow.setAttribute('transform', 'rotate(180 ' + (width / 2) + ' ' + (height / 2) + ')');

        container.appendChild(arrow);
        container.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
        return container;
    }

    function createArrow(width, height) {
        var shaftWidth = 0.3334 * width;
        var shaftHeight = 0.5 * height;

        var arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        arrow.setAttribute('points',
            width + ' ' + (height - shaftHeight) + ' ' +
            (width / 2 + shaftWidth / 2) + ' ' + (height - shaftHeight) + ' ' +
            (width / 2 + shaftWidth / 2) + ' ' + (height) + ' ' +
            (width / 2 - shaftWidth / 2) + ' ' + (height) + ' ' +
            (width / 2 - shaftWidth / 2) + ' ' + (height - shaftHeight) + ' ' +
            '0 ' + (height - shaftHeight) + ' ' +
            (width / 2) + ' 0');
        arrow.classList.add('arrow');

        return arrow;
    }

    $("nve-avalanche-rose").each(function () {        
        drawAvalacheRose($(this));
    });
})();