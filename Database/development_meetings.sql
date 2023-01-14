-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2022 at 08:09 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `development_meetings`
--
CREATE DATABASE IF NOT EXISTS `development_meetings` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `development_meetings`;

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `appointmentId` int(11) NOT NULL,
  `devGroupId` int(11) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `description` varchar(500) NOT NULL,
  `room` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`appointmentId`, `devGroupId`, `start`, `end`, `description`, `room`) VALUES
(1, 4, '2022-12-14 17:00:00', '2022-12-14 20:00:00', 'In this meeting we going to talk about schedule of next month', 'Red Room'),
(2, 3, '2022-12-22 18:30:00', '2022-12-22 21:45:00', 'New features of work we need to implement.', 'Blue Room'),
(3, 3, '2022-12-30 17:00:00', '2022-12-30 22:00:00', 'Schedule planning for next week.', 'Yellow Room'),
(4, 1, '2022-12-21 17:30:00', '2022-12-21 22:45:00', 'Design next project', 'Red Room'),
(5, 2, '2022-12-21 15:30:00', '2022-12-21 20:45:00', 'Design next project', 'Green Room'),
(7, 3, '2023-01-01 20:00:00', '2023-01-01 22:00:00', 'Raise a glass for the new year', 'Central Room');

-- --------------------------------------------------------

--
-- Table structure for table `devgroups`
--

CREATE TABLE `devgroups` (
  `devGroupId` int(11) NOT NULL,
  `devGroupName` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `devgroups`
--

INSERT INTO `devgroups` (`devGroupId`, `devGroupName`) VALUES
(1, 'UI Team'),
(2, 'Mobile Team'),
(3, 'React Team'),
(4, 'DevOps Team');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`appointmentId`),
  ADD KEY `devGroupId` (`devGroupId`);

--
-- Indexes for table `devgroups`
--
ALTER TABLE `devgroups`
  ADD PRIMARY KEY (`devGroupId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `appointmentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `devgroups`
--
ALTER TABLE `devgroups`
  MODIFY `devGroupId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`devGroupId`) REFERENCES `devgroups` (`devGroupId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
