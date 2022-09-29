const menu = [
    {
      id: 1,
      title: "Viejo Oeste",
      category: "Cuarteleros",
      price: 6990,
      img: "./MenuCuartel/ViejoOeste.webp",
      desc: `Exquisito sabor del vacuno con palta, tomate, lechuga, cebolla caramelizada y mayonesa casera, acompañado de unas crujientes papas fritas`,
    },
    {
      id: 2,
      title: "Llanero",
      category: "Cuarteleros",
      price: 7590,
      img: "./MenuCuartel/ElLlanero.webp",
      desc: `Deliciosos champiñones salteados, salsa de champiñon, queso cheddar, cebolla caramelizada, lechuga, rodajas de tomate, crujiente tocino y acompañado de unas ricas papas fritas.`,
    },
    {
      id: 3,
      title: "El Cuartel",
      category: "Cuarteleros",
      price: 6590,
      img: "./MenuCuartel/ElCuartel.webp",
      desc: `Incomparable sandwich de la casa, hecho de deliciosos champiñones, pimentones salteados, lechuga, cebolla y mayonesa casera.`,
    },
    {
      id: 4,
      title: "Barros Luco",
      category: "Tradicional",
      price: 5390,
      img: "./MenuCuartel/BarrosLuco.webp",
      desc: `Deliciosa carne acompañada de queso fundiddo`,
    },
    {
      id: 5,
      title: "A Lo Pobre",
      category: "Tradicional",
      price: 6590,
      img: "./MenuCUartel/ElCuartelALoPobre.webp",
      desc: `Queso fundido sobre unas ricas papas fritas, cebolla caramelizada y huevo frito.`,
    },
    {
      id: 6,
      title: "Gringo",
      category: "Cuarteleros",
      price: 6390,
      img: "./MenuCuartel/ElGringo.webp",
      desc: `Queso cheddar americano, sabroso y crujiente tocino, cebolla caramelizada y salsa barbecue.`,
    },
    {
      id: 7,
      title: "Chacarero",
      category: "Tradicional",
      price: 5990,
      img: "./MenuCuartel/ElChacarero.webp",
      desc: `Tradicional combinacion de tomate, tiernos porotos verdes, aji verde y mayonesa casera.`,
    },
    {
      id: 8,
      title: "Italia",
      category: "Tradicional",
      price: 5990,
      img: "./MenuCuartel/ElItalia.webp",
      desc: `Tradicional combinacion de palta, tomate y mayonesa casera`,
    },
    {
      id: 9,
      title: "Veggie",
      category: "Cuarteleros",
      price: 3990,
      img: "./MenuCuartel/Veggie.webp",
      desc: `Fresca lechuga, acompañada de cebolla caramelizada, queso fundido y mayonesa casera.`,
    },
    {
      id: 10,
      title: "Vegetariano",
      category: "Cuarteleros",
      price: 4890,
      img: "./MenuCuartel/Vegetariano.webp",
      desc: `Champiñones a la plancha aliñado con oregano una pizca de ajo con tomate, palta, aceitunas y mayonesa a gusto.`,
    },
    {
      id: 11,
      title: "Criminal",
      category: "Cuarteleros",
      price: 6390,
      img: "./MenuCuartel/ElCriminal.webp",
      desc: `Combinaciones perfectas! Atrevete a probar este delicioso sandwich de pimenton, queso fundido y cebolla caramelizada.`,
    },
    {
      id: 12,
      title: "Vikingo",
      category: "Cuarteleros",
      price: 6390,
      img: "./MenuCuartel/ElVikingo.webp",
      desc: `Queso cheddar, cebolla caramelizada, rica mayonesa casera, pepinillos, ketchup y un toque de mostaza.`,
    },
    {
      id: 13,
      title: "El Buffalo",
      category: "Cuarteleros",
      price: 6390,
      img: "./MenuCuartel/Buffalo.webp",
      desc: `Sabor del queso derretido combinado de crujiente tocino, champiñon salteado y cebolla caramelizada`,
    },
    {
      id: 14,
      title: "Cono de papas",
      category: "Acompañamientos",
      price: 990,
      img: "./MenuCuartel/conopapas.jpg",
      desc: `Cono de papas fritas individual el perfecto acompañante para tu sandwich.`,
    },
    {
      id: 15,
      title: "Papas Grandes",
      category: "Acompañamientos",
      price: 5390,
      img: "./MenuCuartel/papasgrandes.jpg",
      desc: `Crujientes papas fritas para dos personas.`,
    },
    {
      id: 16,
      title: "Papas chicas",
      category: "Acompañamientos",
      price: 2590,
      img: "./MenuCuartel/papaschicas.jpg",
      desc: `Si eres de buen comer pueden acompañarte estas papas con tu delicioso sandwich para ayudarte a quedar mas saciado.`,
    },
    {
      id: 17,
      title: "Salchipapas Grandes",
      category: "Acompañamientos",
      price: 5890,
      img: "./MenuCuartel/salchipapasgrandes.jpg",
      desc: `Sabrosas papas fritas acompañadas con vienesas fritas picadas para acompañar a dos personas`,
    },
    {
      id: 18,
      title: "Salchipaaps Chicas",
      category: "Acompañamientos",
      price: 3390,
      img: "./MenuCuartel/salchipapaschicas.jpg",
      desc: `Ricas papas fritas para una persona acompañadas de vienesas fritas picadas.`,
    },
    {
      id: 19,
      title: "Chorillana",
      category: "Acompañamientos",
      price: 8190,
      img: "./MenuCuartel/chorillana.jpg",
      desc: `Gran porcion de papas para dos personas combinadas con carne de vacuno, cebolla caramelizada y huevos fritos`,
    },
    {
      id: 20,
      title: "Jugo Watts",
      category: "Bebidas",
      price: 990,
      img: "./MenuCuartel/jugos.jpg",
      desc: `Tradicional Jugo para acompañar tus sandwich`,
    },
    {
      id: 21,
      title: "Bebida 1 1/2 Litro",
      category: "Bebidas",
      price: 2490,
      img: "./MenuCuartel/bebidaslitro.jpg",
      desc: `Bebida ideal para compartir y disfrutar junto a unos ricos sandwich`,
    },
    {
      id: 22,
      title: "Bebida en lata ",
      category: "Bebidas",
      price: 1100,
      img: "./MenuCuartel/bebidaslata.jpg",
      desc: `Puedes elegir entre las opciones de bebida en lata para disfrutar de tu sandwich`,
    },
    {
      id: 23,
      title: "Te",
      category: "Bebidas",
      price: 990,
      img: "./MenuCuartel/te.jpg",
      desc: `Calentito te para acompañarte con tu sandwich ideal para esos dias helados`,
    },
    {
      id: 24,
      title: "Cafe",
      category: "Bebidas",
      price: 900,
      img: "./MenuCuartel/cafe.jpg",
      desc: `Cafe calentito para acompañarte con tu sandwich llenarte de energia`,
    },
  ];

  const btnContainer = document.querySelector('.btn-option');
  const sectionMenu = document.querySelector('.section-menu');

  window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons();
  });



  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){
        //console.log(item);

        return `<article class="menu-item tooltip">
                    <img src=${item.img} class="photo" alt=${item.title}>
                    <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                    </div>
                </article>`;
      })
      displayMenu = displayMenu.join('');
      sectionMenu.innerHTML = displayMenu;
};


  function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
      if(!values.includes(item.category)) {
        values.push(item.category)
      }
      return values;
    },
    ['todos']
    );
    const categoryBtns = categories
    .map(function (category) {
      return `<span onclick="document.getElementById('menu').style.display='none'" class="button display-topright large">x</span>
              <button class="filter-btn" type="button" data-id=${category}> ${category} </button>`;
    })
    .join("");
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll('.filter-btn');
  
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category) {
                    return menuItem;
                }
            });
            //console.log(menuCategory);
            if(category === 'todos'){
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
};

  const $form = document.querySelector('#form');
  const $alert = document.querySelector('.alert')

  $form.addEventListener('submit', handleSubmit);

  async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    })
    if (response.ok) {
      this.reset()
      return $alert.style.display= 'block';
    }
  }


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
