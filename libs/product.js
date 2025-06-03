const product = [
    {
        link: 'product/iphone-16-plus.html',
        img: '../media/product/iphone-16-plus/iphone-16-plus-1.webp',
        name: 'iPhone 16 Plus',
        price: '29.490.000đ',
        description: 'The iPhone 16 Plus delivers powerful performance, ensuring smooth processing, efficient calculations, and energy savings.',
        cpu: 'Apple A18',
        ram: '8GB',
        rom: '512GB',
        display: 6.7,
        type: 'phone'
    },
    {
        link: 'product/samsung-s25-ultra.html',
        img: '../media/product/samsung-s25-ultra/samsung-s25-ultra-1.jpg',
        name: 'Samsung S25 Ultra',
        price: '35.490.000đ',
        description: 'Experience unparalleled performance, groundbreaking camera innovation, and sophisticated design.',
        cpu: 'Snapdragon 8 Elite (3nm)',
        ram: '12GB',
        rom: '1TB',
        display: 6.9,
        type: 'phone'
    },
    {
        link: 'product/xiaomi-15-ultra.html',
        img: '../media/product/xiaomi-15-ultra/xiaomi-15-ultra-1.jpg',
        name: 'Xiaomi 15 Ultra',
        price: '34.990.000đ',
        description: 'Breakthrough power from a new-generation chip, a vastly upgraded camera system, and a display that\'s sharp down to every detail.',
        cpu: 'Snapdragon 8 Elite (3nm)',
        ram: '16GB',
        rom: '1TB',
        display: 6.73,
        type: 'phone'
    },
    {
        link: 'product/oppo-find-n5.html',
        img: '../media/product/oppo-find-n5/oppo-find-n5-1.jpg',
        name: 'Oppo Find N5',
        price: '44.990.000đ',
        description: 'Experience revolutionary thinness and a seamless foldable design. The Oppo Find N5 offers a vibrant large screen unfolded and incredible portability when closed.',
        cpu: 'Snapdragon 8 Elite',
        ram: '16GB',
        rom: '512GB',
        display: 8.12,
        type: 'phone'
    },
    {
        link: 'product/ipad-pro-m4.html',
        img: '../media/product/ipad-pro-m4/ipad-pro-m4-1.webp',
        name: 'iPad Pro M4',
        price: '62.990.000đ',
        description: 'The iPad Pro M4 is Apple\'s most advanced tablet, featuring a stunning Ultra Retina XDR display, M4 chip for exceptional performance, and Apple Intelligence.',
        cpu: 'Apple M4',
        ram: '8GB',
        rom: '2TB',
        display: 13,
        type: 'tablet'
    },
    {
        link: 'product/samsung-tab-s10-ultra.html',
        img: '../media/product/samsung-tab-s10-ultra/samsung-tab-s10-ultra-1.webp',
        name: 'Samsung Tab S10 Ultra',
        price: '34.990.000đ',
        description: 'The Samsung Galaxy Tab S10 Ultra features a 14.6-inch AMOLED display, Galaxy AI tools, S Pen support, and powerful performance for work and play.',
        cpu: 'MediaTek Dimensity 9300+',
        ram: '16GB',
        rom: '1TB',
        display: 14.6,
        type: 'tablet'
    },
    {
        link: 'product/huawei-matepad-pro-4.html',
        img: '../media/product/huawei-matepad-pro-4/huawei-matepad-pro-4-1.webp',
        name: 'Huawei MatePad Pro 4',
        price: '20.990.000đ',
        description: 'The Huawei MatePad Pro 5G is a premium tablet designed for productivity and entertainment. It features a 10.8-inch QHD display, Kirin 990 5G processor, and M-Pencil support.',
        cpu: 'Kirin 9000S',
        ram: '12GB',
        rom: '256GB',
        display: 12.2,
        type: 'tablet'
    },
    {
        link: 'product/xiaomi-pad-7-pro.html',
        img: '../media/product/xiaomi-pad-7-pro/xiaomi-pad-7-pro-1.webp',
        name: 'Xiaomi Pad 7 Pro',
        price: '13.190.000đ',
        description: 'The Xiaomi Pad 7 Pro features a 3.2K 144Hz display, Snapdragon 8s Gen 3, HyperOS, quad speakers, and 67W fast charging.',
        cpu: 'Snapdragon 8s Gen 3',
        ram: '8GB',
        rom: '256GB',
        display: 11.2,
        type: 'tablet'
    },
    {
        link: 'product/msi-creator-m16-hx.html',
        img: '../media/product/msi-creator-m16-hx/msi-creator-m16-hx-1.webp',
        name: 'MSI Creator M16 HX',
        price: '67.990.000đ',
        description: 'The MSI Creator Z17 HX Studio is a powerful laptop designed for creators, featuring an Intel Core i9 processor and NVIDIA RTX 4070 GPU.',
        cpu: 'Intel Core i7-14700HX',
        ram: '32GB',
        rom: '1TB SSD NVMe',
        display: 16,
        type: 'laptop'
    },
    {
        link: 'product/lenovo-yoga-book-9.html',
        img: '../media/product/lenovo-yoga-book-9/lenovo-yoga-book-9-1.webp',
        name: 'Lenovo Yoga Book 9',
        price: '59.990.000đ',
        description: 'The Lenovo Yoga Book 9i is a groundbreaking dual-screen OLED laptop designed for versatility, creativity, and productivity, featuring Intel Core Ultra processors and AI-enhanced functionality.',
        cpu: 'Intel Core Ultra 7 155U',
        ram: '32GB',
        rom: '1TB SSD NVMe',
        display: '2 x 13',
        type: 'laptop'
    },
    {
        link: 'product/lenovo-thinkpad-x9.html',
        img: '../media/product/lenovo-thinkpad-x9/lenovo-thinkpad-x9-1.webp',
        name: 'Lenovo ThinkPad X9',
        price: '54.990.000đ',
        description: 'The Lenovo ThinkPad X9 is a premium business laptop with AI-driven performance, Intel Core Ultra processors, and a sleek aluminum design.',
        cpu: 'Intel Core Ultra 7 258V',
        ram: '32GB',
        rom: '1TB SSD NVMe',
        display: 15.3,
        type: 'laptop'
    },
    {
        link: 'product/dell-xps-9350.html',
        img: '../media/product/dell-xps-9350/dell-xps-9350-1.webp',
        name: 'Dell XPS 9350',
        price: '54.990.000đ',
        description: 'The Dell XPS 13 9350 is a sleek, lightweight laptop featuring Intel Core processors, a vibrant display, and premium build quality.',
        cpu: 'Intel Core Ultra 5 226V',
        ram: '16GB',
        rom: '512GB SSD NVMe',
        display: 13.4,
        type: 'laptop'
    },
];

let showProduct = '';

product.forEach(product => {
    console.log('Product: ' + product.name);
    showProduct +=
    `
    <a class="product-link" href="${product.link}">
        <div class="product-card card m-2 p-0 zoom-out-anm">
            <div class="card-header d-flex justify-content-center">
                <img class="card-img-top" src="${product.img}" alt="${product.name}">
                <div class="detail w-50">
                    <div class="d-flex">
                        <img class="icon" src="../media/icon/cpu.png" alt="CPU icon">
                        <h6>${product.cpu}</h6>
                    </div>
                    <div class="d-flex">
                        <img class="icon" src="../media/icon/ram.png" alt="RAM icon">
                        <h6>${product.ram}</h6>
                    </div>
                    <div class="d-flex">
                        <img class="icon" src="../media/icon/rom.png" alt="ROM icon">
                        <h6>${product.rom}</h6>
                    </div>
                    <div class="d-flex">
                        <img class="icon" src="../media/icon/phone-mornitor.png" alt="Mornitor icon">
                        <h6>${product.display} inches</h6>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title text-center">${product.name}</h5>
                <h5 class="card-title text-center text-danger">${product.price}</h5>
                <p class="card-text">${product.description}</p>
            </div>
            <div class="card-footer">
                <button class="btn">Order Now</button>
            </div>
        </div>
    </a>
    `;
});

document.getElementById('product').innerHTML = showProduct;

// product.forEach(product => {
    
// });