var products = [
    { name: "PEDĀĻI MAMBA S GRS 1", price: 200, category: "Pedāļi", imageUrl: "./img/pedali-1.png", description: "Mamba S pedāļi ar klipsi vienā pusē apvieno platformas pedāļu brīvību un tehniskumu ar Shimano SPD klipša mehānisma spēku un kontroli. Piemēroti MTB riteņbraukšanai, Enduro sacīkstēm, bezceļu piedzīvojumiem, taku un grants braucējiem, kā arī ikvienam, kurš vēlas mazāku un vieglāku pedāli ar klipsi. Tie izgatavoti no viegla un izturīga AL6061 alumīnija ar CrMo asi. Pedāļiem ir izturīgi pini, kas nodrošina perfektu saķeri ar braucēja apaviem. Stabili, ērti un pārliecinoši pedāļi ar GRS gultņu eļļošanas atveri, kas krietni atvieglo pedāļu apkopes veikšanu."},
    { name: "PEDĀĻI VP-577", price: 369, category: "Pedāļi", imageUrl: "./img/pedali-2.png", description: "BMX tipa velosipēda pedāļi. Izturīga polikarbonāta platforma, rūdīta Boron tērauda ass, neslīdoša virsma. Papildus drošībai iestrādāti atstarotāji."},
    { name: "RIEPA KRYPTOTAL-F SO EN 29 TR FOLDABLE", price: 499, category: "Riepas", imageUrl: "./img/riepas-1.png", description: "Kryptotal-Front 29 Soft Enduro kalnu velosipēda riepa, kas optimizēta priekšējam ratam. Šī universālā, modernā riepa ideāli piemērota mainīga reljefa apstākļiem, lai pārvarētu limitus taku, Enduro vai Downhill braucienos. Enduro riepas korpuss ar izturīgu konstrukciju un Apex pastiprinājumu, kas pasargā pret riepas pārsišanu. Mīkstais gumijas sastāvs nodrošina labāku saķeri, saglabājot optimālu kalpošanas laiku un zemu rites pretestību. Riepa ir salokāmā versijā (Foldable). TR (Tubeless Ready) riepa - piemērota bezkameru lietošanai." },
    { name: "AIZMUGURĒJAIS RATS 20 406-21 36H ALU V-BRAKE", price: 578, category: "Rati", imageUrl: "./img/rati-1.png", description: "20 velosipēda aizmugurējais rats ar Chosen rumbu un alumīnija aploci ar 36 spieķiem. Piemērots V-veida bremzēm." },
    { name: "RATU KOMPLEKTS RED METAL ZERO XRP", price: 699, category: "Rati", imageUrl: "./img/rati-2.png", description: "Fulcrum Red Metal Zero XRP 26 ratu komplekts. Vieni no vieglākajiem MTB (kalnu velosipēda) ratiem, svars tikai 1470 grami. Paredzēti XC sacensībām, treniņiem, trasēm un maratoniem. Rati lietojami bez kamerām, paredzēti 6 skrūvju disku bremžu standartam. Aploks izgatavots no trīskārši slīpēta alumīnija, kas to padara par vieglāko alumīnija aploku, kā arī nodrošina ekstremālu izturību. Spieķi - aerodinamiskie alumīnija spieķi ar alumīnija spieķu galviņām. Rats saspieķots pēc 2:1 standarta, kas lieliski pārnes spēku sadali, gan pie aktīvas mīšanās, gan bremzēšanas. Priekšējais rats - kreisā puse 14, labā puse 7; Aizmugurējais rats - kreisā puse 8, labā puse 16 spieķi. Aizmugurējā rumba izgatavota no alumīnija, oglekļa šķiedras, brīvrumbas korpuss no titāna, tā panākot izcili zemu svaru, kā arī bezkompromisa izturību. Priekšējā rumba izgatavota no alumīnija un oglekļa šķiedras. Rumbas apgādātas ar izciliem gultņiem, kas nodrošina perfektu ratu griešanos. Ratu komplektā ietilpst: Priekšējais un aizmugurējais rats, ekscentri un ventiļi." },
    { name: "PEDĀĻI VP-337", price: 799, category: "Pedāļi", imageUrl: "./img/pedali-3.png", description: "Šosejas un fitnesa velosipēdu pedāļi ar rokām pulēta alumīnija korpusu un anodēta alumīnija ietvaru. Pedāļiem ir izturīga tērauda ass un slēgtie lodīšu gultņi." },
    { name: "DAKŠA 16 DAKAR 616", price: 899, category: "Dakšas", imageUrl: "./img/daksas-1.png", description: "Bērnu velosipēda priekšējā dakša. Paredzēta 16 velosipēdiem, izgatavota no tērauda. 1-1/8 dakšas standarta izmērs." },
    { name: "PRIEKŠĒJAIS RATS DRAGON LINE 26", price: 999, category: "Rati", imageUrl: "./img/rati-3.png", description: "Velosipēda priekšējais rats. Dubultā aploce ar apstrādātu bremžu maliņu - izcilai bremžu kluču saķerei ar aploku. Izturīgi, stingri, cinkotie spieķi. Alumīnija Joytec rumba. Rats ir paredzēts aploka bremzēm, stiprinās dakšā ar alumīnija ekscentru." },
    { name: "RIEPA CONTACT SPEED SL 28", price: 1099, category: "Riepas", imageUrl: "./img/riepas-2.png", description: "Izcila izvēle pilsētas velosipēdiem, viena ātruma velosipēdiem un fitnesa velosipēdiem. Dubulta pretpārduršnas aizsardzība, laba saķere un mazs svars. Protektors teicami piemērots asfaltam." },

];

products.forEach(product => {
    if (!product.description || product.description.trim() === "") {
        product.description = "No description available.";
    }
});

function updatePriceLabel(value, labelId) {
    document.getElementById(labelId).innerText = `€${value}`;
}

function applyFilters() {
    const minPrice = parseInt(document.getElementById('min-price').value, 10);
    const maxPrice = parseInt(document.getElementById('max-price').value, 10);
    const selectedCategory = document.getElementById('category-select').value;

    const filteredProducts = products.filter(product => {
        return product.price >= minPrice && product.price <= maxPrice &&
               (!selectedCategory || product.category === selectedCategory);
    });

    displayProducts(filteredProducts);
}

function resetFilters() {
    document.getElementById('min-price').value = 0;
    document.getElementById('max-price').value = 1500;
    document.getElementById('min-price-label').innerText = '€0';
    document.getElementById('max-price-label').innerText = '€1500';
    document.getElementById('category-select').selectedIndex = 0;
    applyFilters();
}

function displayProducts(filteredProducts) {
    const container = document.querySelector('.product-list');
    container.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <div class="product-info">
                <strong>${product.name}</strong>
                <p>€${product.price}</p>
                <small>${product.category}</small>
            </div>
        `;
        productDiv.onclick = () => openModal(product);
        container.appendChild(productDiv);
    });
}

function openModal(product) {
    const modal = document.getElementById('productModal');
    const modalContent = modal.querySelector('.modal-content');

    document.getElementById('modalImage').src = product.imageUrl;
    document.getElementById('modalImage').alt = product.name;
    document.getElementById('modalName').textContent = product.name;
    document.getElementById('modalCategory').textContent = product.category;
    document.getElementById('modalPrice').textContent = `€${product.price}`;
    document.getElementById('modalDescription').textContent = product.description;

    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
        modalContent.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('show');
    modal.addEventListener('transitionend', () => {
        modal.style.display = 'none';
    }, {once: true});
    document.body.style.overflow = 'auto';
}

function setupModalEventListeners() {
    const modal = document.getElementById('productModal');
    const closeButton = document.querySelector('.close');

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    closeButton.addEventListener('click', closeModal);

    document.querySelector('.modal-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    setupModalEventListeners();
});
