require 'faker'

puts "🌱 Seeding spices..."

User.destroy_all
Book.destroy_all
Review.destroy_all
Author.destroy_all
Tag.destroy_all
Booktag.destroy_all

25.times do
    User.create(
        username: Faker::Internet.username,
        password: Faker::Internet.password
    )
end

Author.create(
    name: 'Xiran Jay Zhao',
    statement: "i'm in a cow suit because 7 years ago i made a promise to my friends to take my author photo in it if i ever got published and i'm sure as hell not backing down",
    image_url: 'https://images.gr-assets.com/authors/1587131492p5/20132644.jpg'
)

Author.create(
    name: 'Steven Rinella',
    statement: "Steven Rinella is the host of the Netflix Original series MeatEater and The MeatEater Podcast. He's also the author of six books dealing with wildlife, hunting, fishing and wild game cooking, including the bestselling MeatEater Fish and Game Cookbook: Recipes and Techniques for Every Hunter and Angler.",
    image_url: 'https://images.gr-assets.com/authors/1551460916p8/267770.jpg'
)

Author.create(
    name: 'Dhonielle Clayton',
    statement: "Born and raised in the suburbs of Washington, D.C., Dhonielle spent much of her childhood hiding beneath her grandmother's dining table with a stack of books. As an English teacher at a ballet academy, Clayton rediscovered her passion for children's and young adult literature. To ground herself in the canon, she pursued her Masters in Children's Literature from Hollins University before receiving her MFA in Writing for Children at the New School. She is a former middle school librarian, where she pestered children to read and curated a diverse collection. An avid traveler, Dhonielle's lived in several foreign countries, but she's now settled in Harlem, where you'll find her writing late into the night, lurking in libraries, and hunting for the best slice of New York pizza. She is the COO of We Need Diverse Books and the co-founder of Cake Literary. The co-author of the dance dramas Tiny Pretty Things and Shiny Broken Pieces, as well as the upcoming Rumor Game, Dhonielle is the author of the New York Times bestselling YA fantasy series The Belles. Find her on the web at DhonielleClayton.com or on Twitter @brownbookworm.",
    image_url: 'https://images.gr-assets.com/authors/1517526815p5/7359319.jpg'
)

Author.create(
    name: 'Korey Watari',
    statement: "Korey is a sansei, or third-generation Japanese American, born and raised in Los Angeles. She played basketball for a Japanese American league, graduated from the University of California, Riverside and studied at the Fashion Institute of Design and Merchandising. Korey has worked in the animation and fashion industries for companies such as Disney and the Gap. I Am Able to Shine is her first picture book.",
    image_url: 'https://images.gr-assets.com/authors/1648812296p5/21798318.jpg'
)

Author.create(
    name: 'Soman Chainani',
    statement: "A graduate of Harvard University and Columbia University’s MFA Film Program, Soman began his career as a screenwriter and director, with his films playing at over 150 film festivals around the world. He has been nominated for the Waterstone Prize for Children’s Literature, been named to the Out100, and also received the $100,000 Shasha Grant and the Sun Valley Writer’s Fellowship, both for debut writers.",
    image_url: 'https://images.gr-assets.com/authors/1483891427p5/780120.jpg'
)

Author.create(
    name: 'Phil Stamper',
    statement: "Phil Stamper grew up in a rural village near Dayton, Ohio. While it could be seen as a boring lifestyle to some, he kept himself entertained by playing the piano and writing stories that stretched his imagination. He has a B.A. in Music from the University of Dayton and an M.A. in Publishing with Creative Writing from Kingston University.",
    image_url: 'https://images.gr-assets.com/authors/1622572813p5/13674647.jpg'
)

Author.create(
    name: 'Rochelle Hassan',
    statement: "When she's not writing, she spends her days watching animated films, ordering too much take-out, and haunting the used paperback section of her favorite bookstore.",
    image_url: 'https://images.gr-assets.com/authors/1629911295p5/20452859.jpg'
)



Book.create(
    title: 'Zachary Ying and the Dragon Emperor (Zachary Ying, #1)',
    author_id: Author.first.id,
    description: "A middle grade contemporary fantasy that follows a young boy as he journeys across China to seal the underworld shut and save the mortal realm.",
    image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1649866448l/59365584.jpg'
)

Book.create(
    title: 'Outdoor Kids in an Inside World: Getting Your Family Out of the House and Radically Engaged with Nature',
    author_id: Author.second.id,
    description: "The indispensable case for parenting tough, curious, and competent kids who feel at home in the outdoors, from the New York Times bestselling author and host of the TV series and podcast MeatEater",
    image_url:' https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639379419l/57569786.jpg'
)

Book.create(
    title: 'The Marvellers (Marvellerverse #1)',
    author_id: Author.third.id,
    description: "Author Dhonielle Clayton makes her middle-grade debut with a fantasy adventure set in a global magic school in the sky.",
    image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1620716941l/56896065.jpg'
)

Book.create(
    title: 'I Am Able to Shine',
    author_id: Author.fourth.id,
    description: "An affirmative, empowering story about embracing your identity and finding your voice, inspired in part by debut author Korey Watari’s experiences growing up Asian American, and illustrated by her husband, Mike Wu, Pixar artist and creator of the Ellie series.",
    image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1644453050l/58957681._SX318_.jpg'
)

Book.create(
    title: 'Rise of the School for Good and Evil (The School for Good and Evil #0.5)',
    author_id: Author.fifth.id,
    description: "The battle between Good and Evil begins. Two brothers. One Good. One Evil. Together they watch over the Endless Woods. Together they choose the students for the School for Good and Evil.",
    image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1638953590l/59773289.jpg'
)

Book.create(
    title: 'Small Town Pride',
    author_id: 90,
    description: "From acclaimed author Phil Stamper (The Gravity of Us and As Far as Youll Take Me) comes a poignant coming-of-age, contemporary middle grade debut novel about finding your place, using your voice, and the true meaning of pride. Perfect for fans of Rick by Alex Gino and The Best at It by Maulik Pancholy.",
    image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1644338790l/58932372.jpg'
)

Book.create(
    title: 'The Prince of Nowhere',
    author_id: 91,
    description: "Roda isnt afraid of the monsters that roam the wilds of the Aerlands. Shes safe in her small town, surrounded by a wall of freezing, enchanted mist that keeps the beasts away. So when Roda rescues an injured crow on the instruction of her secret pen pal, Anonymous – whose letters arrive without warning and correctly predict the future – shes surprised to learn shes brought one of the so-called monsters home. Because her crow is really a shape-shifting boy named Ignis.",
    image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1635101334l/58733672.jpg'
)

25.times do
    Review.create(
        user_id: rand(User.first.id..User.last.id),
        book_id: rand(Book.first.id..Book.last.id),
        content: Faker::Lorem.paragraph
    )
end

Tag.create(
    content: 'fiction'
)

Tag.create(
    content: 'middle grade'
)

Tag.create(
    content: 'mystery'
)

Tag.create(
    content: 'fantasy'
)

Tag.create(
    content: 'science fiction'
)

Tag.create(
    content: 'funny'
)

Booktag.create(
    book_id: 32,
    tag_id: 16
)

Booktag.create(
    book_id: 32,
    tag_id: 13
)

Booktag.create(
    book_id: 33,
    tag_id: 14
)

Booktag.create(
    book_id: 35,
    tag_id: 16
)

Booktag.create(
    book_id: 35,
    tag_id: 15
)

Booktag.create(
    book_id: 36,
    tag_id: 18
)

Booktag.create(
    book_id: 36,
    tag_id: 16
)

Booktag.create(
    book_id: 36,
    tag_id: 14
)

Booktag.create(
    book_id: 37,
    tag_id: 13
)

Booktag.create(
    book_id: 37,
    tag_id: 14
)

Booktag.create(
    book_id: 38,
    tag_id: 13
)

Booktag.create(
    book_id: 38,
    tag_id: 17
)

puts "✅ Done seeding!"
