# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])

characters = Character.create([{name: 'Alice', age: 12, favorite_color:'blue'},{name: 'Gerald', age: 32, favorite_color: 'orange'}, 
{name: 'Edgar', age: 15, favorite_color: 'blue'}, {name: 'Bertha', age:75, favorite_color: 'pink'}, {name: 'Kenny', age: 20, favorite_color: 'green'}]) 

gifts = Gift.create([{name: 'Camera', price: '600.00', character_id: 1, img_url:'https://miro.medium.com/max/11508/1*ff3dAX2BTBvQXe4IZkeoIg.jpeg'}, 
{ name: 'Notebook', price: '15.99', character_id: 2, img_url: 'https://st2.depositphotos.com/3139105/7028/i/950/depositphotos_70288013-stock-photo-hand-write-on-the-notebook.jpg'},
{ name: 'Video Game', price: '459.99', character_id: 3, img_url: 'https://www.usnews.com/dims4/USNEWS/5975e87/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fcb%2F24%2Fa96fd5194c44b9db58b0d9d835f3%2F160728-videogameviolence-stock.jpg'},
{ name: 'Socks', price: '10.99', character_id: 4, img_url: 'https://image.made-in-china.com/202f0j00KJRafbrcCWqS/Men-and-Ladies-Socks-Stock.jpg'}, 
{ name: 'TV', price: '899.99', character_id: 5, img_url: 'https://freestocks.org/fs/wp-content/uploads/2018/04/remote_control_pointed_at_a_tv_screen-1000x667.jpg'}])