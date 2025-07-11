-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Nov-2024 às 09:22
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `node-complete`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `description` text NOT NULL,
  `imageUrl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `description`, `imageUrl`) VALUES
(1, 'Hábitos Atómicos', 15, '\"Imagine que decide passar a correr dez quilómetros por dia. Se é um corredor profissional, até pode saber a pouco. Mas se nunca correu na vida, o seu objetivo revela-se demasiado ambicioso – e condenado ao fracasso.\r\n\r\nNo entanto, se usar \"A Regra dos Dois Minutos\", e gastar apenas esse tempo a treinar todos os dias, é bem capaz de, sem dar por isso, estar a caminho da sua primeira maratona. A maior parte das pessoas pensa que para mudar de vida (ou mudar algo de relevante nas suas vidas) tEm de pensar em grande. Mas um dos maiores especialistas mundiais em hábitos, James Clear, propõe uma alternativa.\r\n\r\nApós décadas de trabalho nessa área, concluiu que as grandes mudanças surgem do efeito combinado de centenas de pequenos atos – seja fazer uma elevação por dia ou acordar cinco minutos mais cedo. É o que o autor chama de Hábitos Atómicos.\r\n\r\nNeste livro revolucionário, o autor mostra passo a passo como usar essas minúsculas mudanças para conseguir resultados estruturantes na sua vida.\r\n\r\nDá-nos as pequenas dicas (como A Regra dos 2 Minutos) mas sobretudo uma metodologia apoiada no melhor que a Psicologia e a Neurociência têm para oferecer.\r\n\r\nVai assim ficar a conhecer as quatro leis para a formação de hábitos (a evidência, a atração, a facilidade e a gratificação), e como implementá-las. \"', 'https://static.fnac-static.com/multimedia/Images/PT/NR/02/1b/51/5315330/1507-1.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
