// $('p.para1').css('color', 'blue');
// $('p.para1').css({color:'red', background:'#ccc'});
// $('p.para2').css('color', 'red');

// $('p.para2').addClass('myClass');
// $('p.para2').removeClass('myClass');

// $('#btn1').click(function(){
//   $('p.para2').toggleClass('myClass');
// });

// $('#myDiv').text('Hello Everybody');
// $('#myDiv').html('<h2>Hello Everybody</h2>');
// alert($('#myDiv').text());

// $('ul').append('<li>Hellowww</li>');
// $('ul').prepend('<li>Hellowww2222</li>');

// $('.para1').appendTo('.para2'); //degistiyor 1 ve 2 yerini
// $('.para1').prependTo('.para2');

// $('#list').before('<h4>Hello world</h4>');
// $('#list').after('<h4>salam world</h4>');

// $('#list').empty();
// $('#list').detach();

// $('a').attr('target','_blank');//yeni sayfada acar linki
// alert($('a').attr('href'));
// $('a').removeAttr('target'); // ayni sayfada acar


// $('p').wrap('<h1>');
// $('p').wrapAll('<h1>');

$('#newItem').keyup(function(e){
  var code = e.which;
  if(code == 13){
    e.preventDefault();
    $('#list').append('<li>' +e.target.value+'</li>');
  }
});


// var myArr = ['Tore', 'Turkmen', 'Aga', 'Kerry'];
// $.each(myArr, function(i, val){
// $('#users').append('<li>' +val+ '</li>')
// });

var newArr = $('ul#list li').toArray();
$.each(newArr, function(i, val){
  console.log(val.innerHTML);
});
