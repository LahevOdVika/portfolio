create table `projects`
(
    ID          int auto_increment comment 'Id for each project'
        primary key,
    address     text     not null comment 'Url address of the website',
    image_path  longtext not null comment 'Path for the website thumbnail',
    description longtext null comment 'Description of the website/project'
)
    comment 'Database for all of my projcets';
