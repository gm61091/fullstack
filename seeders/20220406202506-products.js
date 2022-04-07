'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     * 
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('products', [
        {
          name: "Caeser salad",
          type: "salad",
          price: 15.49,
          description: "Large, fresh Romaine, croutons and parmesan cheese served with a side of our caesar dressing.",
          imgurl: "/pics/caeser salad.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Chicken carbanara",
          type: "pasta",
          price: 19.99,
          description: "Spaghetti tossed in a rich bacon cream sauce with eggs, Parmesan and Romano cheeses topped with diced tomatoes and bacon",
          imgurl: "/pics/chicken carbanara pasta.avif",
          createdAt: new Date(),
          updatedAt: new Date(),
          
      },
        {
          name: "Fettuccine carrabba",
          type: "pasta",
          price: 18.99,
          description: "Fettuccine Alfredo with wood-grilled chicken, sauteed mushrooms and peas.",
          imgurl: "/pics/fettuccine carabara.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "House salad",
          type: "salad",
          price: 11.99,
          description: "Large romaine with carrots and shredded red cabbage topped with pepperoncini and Kalamata olives. Served with our creamy parmesan dressing on the side.",
          imgurl: "/pics/house salad.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Italian chopped salad",
          type: "salad",
          price: 12.79,
          description: "Roasted turkey breast, julienned salami, garbanzo beans, tomatoes, Mozzarella and fresh basil. Served with housemade mustard herb vinaigrette.",
          imgurl: "/pics/italian chopped salad.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "italian salad",
          type: "salad",
          price: 15.49,
          description: "Large romaine, garden vegetables, kalamata olives and our Italian vinaigrette dressing",
          imgurl: "/pics/italian salad",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Jamaican jerk pizza",
          type: "pizza",
          price: 17.99,
          description: "Spicy sweet Caribbean sauce, authentic Jamaican spices, Nueske's applewood smoked bacon, red onions, bell peppers and scallions.",
          imgurl: "/pics/jamaican jerk pizza.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Lasagna",
          type: "pasta",
          price: 16.79,
          description: "Fresh pasta layered with our pomodoro sauce, meat sauce, ricotta, romano and mozzarella cheese.",
          imgurl: "/pics/lasagna.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Linguine pastino",
          type: "pasta",
          price: 16.49,
          description: "Crushed tomatoes, garlic, olive oil and basil.",
          imgurl: "/pics/linguine pastino pasta.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Linguine pescatore",
          type: "pasta",
          price: 23.49,
          description: "Shrimp, scallops and mussels tossed in our spicy marinara sauce with linguine imported from Italy.",
          imgurl: "/pics/linguine pescatore pasta.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Lobster ravioli",
          type: "pasta",
          price: 20.99,
          description: "Ravioli stuffed with lobster and romano in our white wine cream sauce topped with diced tomatoes.",
          imgurl: "/pics/lobster rav.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Margherita pizza",
          type: "pizza",
          price: 15.99,
          description: "Crushed tomatoes with fresh Mozzarella, fresh basil and Parmesan.",
          imgurl: "/pics/marg pizza.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      
        {
          name: "Spaghetti",
          type: "pasta",
          price: 13.99,
          description: "Topped with our pomodoro sauce, meat sauce, or meatballs.",
          imgurl: "/pics/sketti.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Mushroom pepperoni sausage pizza",
          type: "pizza",
          price: 15.99,
          description: "Cremini mushrooms, rustic pepperoni, spicy Italian sausage, fresh torn basil, Mozzarella and wild Greek oregano.",
          imgurl: "/pics/mushroom pepperoni sausage pizza.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "BBQ chicken pizza",
          type: "pizza",
          price: 15.99,
          description: "Created here in 1985. Our legendary BBQ sauce, smoked Gouda, red onions and fresh cilantro transform this original to iconic. Also available with Nueske's applewood smoked bacon or fresh pineapple.",
          imgurl: "/pics/og bbq chicken pizza.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Pepperoni pizza",
          type: "pizza",
          price: 14.99,
          description: "Rustic and spicy pepperoni with fresh Mozzarella and wild Greek oregano. Also available with white truffle oil.",
          imgurl: "/pics/pepperoni pizza.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Rigatoni martino",
          type: "pasta",
          price: 18.99,
          description: "Sauteed mushrooms, sun-dried tomatoes, parmesan and romano cheese tossed with rigatoni pasta in our tomato cream sauce topped with scallions and ricotta salata",
          imgurl: "/pics/rigatoni martino pasta.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Sicilian pizza",
          type: "pizza",
          price: 18.99,
          description: "Spicy marinara, Italian sausage, spicy Capicola ham, salami, Mozzarella, shaved Parmesan, fresh basil & oregano.",
          imgurl: "/pics/sicilian pizza.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          
          name: "The works pizza",
          type: "pizza",
          price: 16.99,
          description: "Spicy Italian sausage, rustic pepperoni, Cremini mushrooms, Mozzarella, red onions, green peppers, olives and wild Greek oregano.",
          imgurl: "/pics/the works pizza.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Wild mushroom pizza",
          type: "pizza",
          price: 15.99,
          description: "Shaved Cremini, Shiitake, and Portobello mushrooms with slivered scallions, cracked black pepper, Romano and Mozzarella. Finished with Parmesan. Also available with white truffle oil.",
          imgurl: "/pics/wild mushroom pizza.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Mozzarella marinara",
          type: "appetizer",
          price: 10.99,
          description: "Hand-cut and breaded, served with our marinara sauce.",
          imgurl: "/pics/moz stix.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Meatball ricotta",
          type: "appetizer",
          price: 8.99,
          description: "Simmered in our pomodoro sauce with ricotta and romano cheese.",
          imgurl: "/pics/meatball ricatta.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Calamari",
          type: "appetizer",
          price: 13.99,
          description: "Hand-breaded to order and served with our Ricardo and marinara sauces.",
          imgurl: "/pics/calamari.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
        {
          name: "Four-cheese sausage stuffed mushrooms",
          type: "appetizer",
          price: 9.99,
          description: "Four mushrooms stuffed with sausage, spinach, ricotta, parmesan, romano, mozzarella cheese and Italian breadcrumbs served over our tomato cream sauce",
          imgurl: "/pics/4cheese.avif",
          createdAt: new Date(),
          updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
