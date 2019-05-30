CREATE DATABASE ng_personagem_db;

USE ng_personagem_db;

--
-- Estrutura para tabela `personagem`
--

DROP TABLE IF EXISTS personagem;

CREATE TABLE personagem (
  cod_personagem int(11) AUTO_INCREMENT NOT NULL COMMENT 'Código do personagem',
  nom_personagem varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nome do personagem Star Wars',
  imagem varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Link para uma imagem do personagem',
  descricao varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descrição sobre o personagem',
  datahora timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Data e Hora da última modificação'
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Personagens da saga Star Wars';

--
-- Tabela truncada antes do insert `personagem`
--

TRUNCATE TABLE personagem;