create database ProjetoPessoal;
use ProjetoPessoal;

create table Usuarios
(idUsuario int primary key auto_increment,
nome varchar(45), sobrenome varchar(45),
email varchar(45), senha varchar(45));



create table Quiz 
(idQuiz int primary key auto_increment,
perguntas varchar(60));


create table Tentativa
(idTentativa int ,
fkUsuarios int,
fkQuiz int,
alternativaPirata int,
alternativaMarinha int,
alternativaRevolucionarios int,
dtHora timestamp default current_timestamp,
primary key (idTentativa, fkUsuarios, fkQuiz),
constraint TentativaUsuarios
foreign key (fkUsuarios)
references Usuarios(idUsuario),
foreign key (fkQuiz)
references Quiz(idQuiz));



select * from Usuarios;
select * from Tentativa;
select * from Quiz;


