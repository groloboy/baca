var basepath = 'file:///C:/Users/Usuario/Desktop/proyectos/baca';
var app=angular.module('bacaApp', [])
app.controller('bacacontroller', function bacacontroller($scope,$window,$location) {
    $scope.login=[
        {
            user:'admin',
            pass:'admin'
        },
        {
            user:'user',
            pass:'user'
        },
        {
            user:'company',
            pass:'company'
        },
    ]
    $scope.titulo="Destacadas"
    $scope.precio=""
    $scope.iniciar = (user,pass) => {
        $scope.login.forEach(u => {
            if(u.user==user){
                if(pass==u.pass){
                    console.log('si')
                    $window.location.href=basepath+'/index.html';
                }
            }
        });
    }
    $scope.buscar = (user) => {
        if ($scope.ia=="celebracion de aniversario"){
            $scope.titulo="Tu plan perfecto";
            $scope.precio="$449.000"
            $scope.empresas=[
                {
                    nombre:'Breakfast & Snacks Nat',
                    logo:'desayunos.jpg',            
                    categorias:['sorpresas'],
                    descripcion:'En estas fechas de amor y amistad @breakfastandsnacknat tiene todo lo necesario para llenar de amor a todos tus seres queridos con desayunos sorpresa, almuerzos sorpresa, regalos sorpresa, anchetas de maquillaje, micheladas y cocteles.',
                    puntaje:'4.1',
                    codigo:'b'
                },
                {
                    nombre:'Sürpriz',
                    logo:'surpriz.jpg',            
                    categorias:['sorpresas'],
                    descripcion:'Crea momentos, ¡regala con amor!',
                    puntaje:'4.6',
                    codigo:'c'
                },
                {
                    nombre:'Diva Sangría',
                    logo:'diva.jpg',            
                    categorias:['bebidas'],
                    descripcion:'Exquisitas sangrías Artesanales Vino tinto y rosé. Tenemos un ingrediente especial',
                    puntaje:'4.0',
                    codigo:'d'
                },
            ]
        }
        console.log("ia");        
    }
    $scope.ciudades=[
        'Cali',
        'Buga',
        'Tulua',
        'Palmira',
        'Jamundi',
        'Yumbo',
    ]
    $scope.proveedores=[
        {
            nombre:'Restaurante',
            logo:'logo2.jpg',            
            categorias:['alimentos'],
            descripcion:'',
            puntaje:'4.8',
            codigo:'a'
        },
        {
            nombre:'Restaurante',
            logo:'logo2.jpg',            
            categorias:['alimentos'],
            descripcion:'',
            puntaje:'4.8',
            codigo:'a'
        },
        {
            nombre:'Restaurante',
            logo:'logo2.jpg',            
            categorias:['alimentos'],
            descripcion:'',
            puntaje:'4.8',
            codigo:'a'
        },
        {
            nombre:'Restaurante',
            logo:'logo2.jpg',            
            categorias:['alimentos'],
            descripcion:'',
            puntaje:'4.8',
            codigo:'a'
        },
    ]
    $scope.empresas=[
        {
            nombre:'Vg Producciones',
            logo:'logo2.jpg',            
            categorias:['bodas'],
            descripcion:'En VG Producciones pueden realizar diferentes montajes para destacar cada ocasión, ya que ellos se adaptan a la necesidad de cada cliente. En VG Producciones pueden realizar diferentes montajes para destacar cada ocasión, ya que ellos se adaptan a la necesidad de cada cliente. En VG Producciones pueden realizar diferentes montajes para destacar cada ocasión, ya que ellos se adaptan a la necesidad de cada cliente.',
            puntaje:'4.8',
            codigo:'a'
        },        
        {
            nombre:'Breakfast & Snacks Nat',
            logo:'desayunos.jpg',            
            categorias:['sorpresas'],
            descripcion:'En estas fechas de amor y amistad @breakfastandsnacknat tiene todo lo necesario para llenar de amor a todos tus seres queridos con desayunos sorpresa, almuerzos sorpresa, regalos sorpresa, anchetas de maquillaje, micheladas y cocteles.',
            puntaje:'4.1',
            codigo:'b'
        },
        {
            nombre:'Vg Producciones',
            logo:'logo2.jpg',            
            categorias:['bodas'],
            descripcion:'En VG Producciones pueden realizar diferentes montajes para destacar cada ocasión, ya que ellos se adaptan a la necesidad de cada cliente. En VG Producciones pueden realizar diferentes montajes para destacar cada ocasión, ya que ellos se adaptan a la necesidad de cada cliente. En VG Producciones pueden realizar diferentes montajes para destacar cada ocasión, ya que ellos se adaptan a la necesidad de cada cliente.',
            puntaje:'4.8',
            codigo:'x'
        },
        {
            nombre:'Sürpriz',
            logo:'surpriz.jpg',            
            categorias:['sorpresas'],
            descripcion:'Crea momentos, ¡regala con amor!',
            puntaje:'4.6',
            codigo:'c'
        },
        {
            nombre:'Vg Producciones',
            logo:'logo2.jpg',            
            categorias:['bodas'],
            descripcion:'En VG Producciones pueden realizar diferentes montajes para destacar cada ocasión, ya que ellos se adaptan a la necesidad de cada cliente. En VG Producciones pueden realizar diferentes montajes para destacar cada ocasión, ya que ellos se adaptan a la necesidad de cada cliente. En VG Producciones pueden realizar diferentes montajes para destacar cada ocasión, ya que ellos se adaptan a la necesidad de cada cliente.',
            puntaje:'4.8',
            codigo:'z'
        },
        {
            nombre:'Diva Sangría',
            logo:'diva.jpg',            
            categorias:['bebidas'],
            descripcion:'Exquisitas sangrías Artesanales Vino tinto y rosé. Tenemos un ingrediente especial',
            puntaje:'4.0',
            codigo:'d'
        },
        {
            nombre:'Vg Producciones',
            logo:'logo2.jpg',            
            categorias:['bodas'],
            descripcion:'En VG Producciones pueden realizar diferentes montajes para destacar cada ocasión, ya que ellos se adaptan a la necesidad de cada cliente. En VG Producciones pueden realizar diferentes montajes para destacar cada ocasión, ya que ellos se adaptan a la necesidad de cada cliente. En VG Producciones pueden realizar diferentes montajes para destacar cada ocasión, ya que ellos se adaptan a la necesidad de cada cliente.',
            puntaje:'4.8',
            codigo:'y'
        },
    ]
    

  });