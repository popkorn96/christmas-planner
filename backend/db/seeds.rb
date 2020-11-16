# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
characters = Character.create([{name: 'Alice', age: 12, favorite_color:'blue'},{name: 'Gerald', age: 32, favorite_color: 'orange'}, 
{name: 'Edgar', age: 15, favorite_color: 'blue'}, {name: 'Bertha', age:75, favorite_color: 'pink'}, {name: 'Kenny', age: 20, favorite_color: 'green'}]) 
gifts = Gift.create([{name: 'Camera', price: '600.00', character_id: 1, img_url:'https://us.123rf.com/450wm/ha4ipuri/ha4ipuri1508/ha4ipuri150800034/44515491-black-digital-camera-isolated-on-white-background-with-clipping-path.jpg?ver=6'}, 
{ name: 'Notebook', price: '15.99', character_id: 2, img_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcreativemarket.com%2Fjacqueamadi%2F682231-Feminine-Styled-Stock-Notebook&psig=AOvVaw3QK8wiJ0kF10q_CgUoSMqv&ust=1605648831375000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDuxZeCiO0CFQAAAAAdAAAAABAD'},
{ name: 'Video Game', price: '459.99', character_id: 3, img_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmoney.usnews.com%2Finvesting%2Fbuy-and-hold-strategy%2Fslideshows%2F8-plays-for-video-game-stocks&psig=AOvVaw2arpBvEX0I9SiynoC3pzkC&ust=1605648906747000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjPmLqCiO0CFQAAAAAdAAAAABAP'},
{ name: 'Socks', price: '10.99', character_id: 4, img_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fsocks-gm494214254-77323245&psig=AOvVaw3Ljw--BVWLxfkYGSBDQ1ac&ust=1605648979597000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjgsuCCiO0CFQAAAAAdAAAAABAa'}, 
{ name: 'TV', price: '899.99', character_id: 5, img_url: 'https://media.istockphoto.com/photos/black-smart-tv-mockup-on-wooden-console-picture-id930099304?k=6&m=930099304&s=612x612&w=0&h=N3hCWL5HTB3_dsMumAgL3R9LT5hyyhOWKenjKGr5u_w='}])