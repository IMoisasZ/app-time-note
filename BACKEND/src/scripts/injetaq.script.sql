create database injetaq;

use injetaq;
create table sector (
	sector_id int auto_increment primary key,
    name varchar(50) not null,
    actived boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table user (
	user_id int auto_increment primary key,
    name varchar(50) not null,
    email varchar(50) not null unique,
    password varchar(20) not null,
    sector_id int not null,
    foreign key (sector_id) references sector(sector_id),
    actived boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table client (
	client_id int auto_increment primary key,
    name varchar(50) not null,
    actived boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table status_di (
	status_di_id int primary key auto_increment,
    status varchar(15) not null,
    actived boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table type_di (
	type_di_id int primary key auto_increment,
    name varchar(10) not null,
    actived boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table di (
	di_id int auto_increment primary key,
    di int not null unique,
    os varchar(10),
    op varchar(20),
    order_number varchar(20),
    budget_number varchar(10),
    die_description varchar(255),
    die_number varchar(20),
    name_piece varchar(255),
    number_piece varchar(50),
    client_id int not null,
    foreign key(client_id) references client(client_id),
    start date,
    deadline date,
    progress varchar(7),
    update_date date,
    type_di_id int not null,
    foreign key (type_di_id) references type_di(type_di_id),
    status_di_id int not null,
    foreign key (status_di_id) references status_di(status_di_id),
    delivery date,
    createdAt datetime,
    updatedAt datetime
);

/*
	create table di_setor (
	di_setor_id int auto_increment primary key,
    di int not null,
    foreign key(di) references di(di),
    setor_id int not null,
    createdAt datetime,
    updatedAt datetime
);

create table operacao (
	operacao_id int auto_increment primary key,
    operacao varchar(30) not null,
    custo_operacao numeric not null,
    ativo boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table di_operacao (
	di_operacao_id int auto_increment primary key,
    di int not null,
    foreign key (di) references di(di),
    operacao_id int not null,
    foreign key (operacao_id) references operacao(operacao_id),
    qtde_horas numeric not null,
    custo_operacao numeric not null,
    createdAt datetime,
    updatedAt datetime
);

create table di_comentario (
	di_comentario_id int auto_increment primary key,
    di int not null,
    foreign key (di) references di(di),
    usuario_id int not null,
    foreign key(usuario_id) references usuario(usuario_id),
    data datetime not null,
    comentario varchar(255) not null,di_comentario,
    createdAt datetime,
    updatedAt datetime
)
*/

create table type_reason (
	type_reason_id int primary key auto_increment,
    name varchar(15) not null,
    actived boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table code_reason(
	code_reason_id int primary key auto_increment,
    code_reason char(1) not null unique,
    description_reason varchar(50) not null,
    type_reason_id int not null,
    foreign key(type_reason_id) references type_reason(type_reason_id),
    actived boolean default true,
	createdAt datetime,
    updatedAt datetime
);

create table description_reason(
	description_reason_id int primary key auto_increment,
    code_reason_id int not null,
    foreign key(code_reason_id) references code_reason(code_reason_id),
    description_reason varchar(150) not null,
    actived boolean default true,
	createdAt datetime,
    updatedAt datetime
);

create table place_work(
	place_work_id int primary key auto_increment,
    place_work varchar(50) not null,
    sector_id int not null,
    foreign key(sector_id) references sector(sector_id),
    actived boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table operation(
	operation_id int primary key auto_increment,
    operation varchar(20) not null,
    actived boolean default true,
	createdAt datetime,
    updatedAt datetime
);

create table expedient (
	expedient_id int primary key auto_increment,
    expedient varchar(15) not null,
    actived boolean default true,
    createdAt datetime,
    updatedAt datetime
);

create table project_note (
	note_id int primary key auto_increment,
    /*user_id int not null,
    foreign key (user_id) references user(user_id),*/
    date date not null,
    code_reason_id int not null,
    foreign key(code_reason_id) references code_reason(code_reason_id),
    description_reason_id int not null,
    foreign key(description_reason_id) references description_reason(description_reason_id),
    di_id int,
    foreign key(di_id) references di(di_id),
    os_id int,
    task_description varchar(255),
    place_work_id int,
    foreign key(place_work_id) references place_work(place_work_id),
    operation_id int,
    foreign key(operation_id) references operation(operation_id),
    expedient_id int,
    foreign key(expedient_id) references expedient(expedient_id),
    start time not null,
    pause time not null,
    finish time not null,
    notice varchar(255),
    note_status varchar(30) not null,
	createdAt datetime,
    updatedAt datetime
);

drop table project_note;

