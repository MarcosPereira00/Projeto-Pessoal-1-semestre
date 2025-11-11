create database ProjetoPessoal;
use ProjetoPessoal;

create table Usuarios
(idUsuarios int primary key auto_increment,
nome varchar(45), sobrenome varchar(45),
email varchar(45), senha varchar(45));

create table Quiz 
(idQuiz int primary key auto_increment,
perguntas varchar(60));

create table Respostas
(idResposta int,
fkUsuarios int,
fkQuiz int,
primary key (idResposta, fkUsuarios, fkQuiz),
constraint RespostasUsuarios
foreign key (fkUsuarios)
references Usuarios(idUsuarios),
foreign key (fkQuiz)
references Quiz(idQuiz));

