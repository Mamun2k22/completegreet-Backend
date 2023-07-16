-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 14, 2023 at 07:42 PM
-- Server version: 8.0.32
-- PHP Version: 7.4.3-4ubuntu2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nestjsdb_2023`
--

-- --------------------------------------------------------

--
-- Table structure for table `Blogs`
--

CREATE TABLE `Blogs` (
  `id` int NOT NULL,
  `title` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `description` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `content` longtext CHARACTER SET latin1 COLLATE latin1_swedish_ci,
  `publisher` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `image` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Bubbles`
--

CREATE TABLE `Bubbles` (
  `id` int NOT NULL,
  `bubble_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_video` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_gif` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_font_size` int DEFAULT NULL,
  `bubble_title` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_size` int DEFAULT NULL,
  `bubble_border_color` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_background_color` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_button_color` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_font_family` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_darken` tinyint(1) DEFAULT NULL,
  `bubble_style` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_position` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_video_fit` tinyint(1) DEFAULT NULL,
  `bubble_delay` int DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `bubble_animation` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_code` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_available` tinyint(1) DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Bubbles`
--

INSERT INTO `Bubbles` (`id`, `bubble_name`, `bubble_video`, `bubble_gif`, `bubble_font_size`, `bubble_title`, `bubble_size`, `bubble_border_color`, `bubble_background_color`, `bubble_button_color`, `bubble_font_family`, `bubble_darken`, `bubble_style`, `bubble_position`, `bubble_video_fit`, `bubble_delay`, `is_deleted`, `bubble_animation`, `bubble_code`, `bubble_available`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'Complete Greet', 'Bubble-Video-file-1671210339942.mp4', 'Bubble-Video-file-1671210339942.gif', 18, 'Hey!', 82, '#3B5DCD', '#ffffff', '#CD7D3B', 'Helvetica', 0, 'Rectangle', 'Left', 1, 2, 0, 'No-Animation', '757f5c5b-1382-5566-8871-e22c2c408d09', 1, '2022-12-09 11:57:18', '2022-12-16 20:19:27', 1),
(2, 'test', 'Bubble-Video-file-1670592180174.mp4', 'Bubble-Video-file-1670592180174.gif', 25, 'Hey!', 300, '#007000', '#ffffff', '#CD7D3B', 'Arial', 1, 'Circle', 'Right', 1, 4, 0, 'Left-to-right', 'ed44b40c-1324-5ec3-87e6-bd518dcea146', 1, '2022-12-09 13:23:00', '2022-12-09 14:31:27', 2),
(3, 'Webytoh web services', 'Bubble-Video-file-1671189499155.mp4', 'Bubble-Video-file-1671189499155.gif', 25, 'View My Projects', 170, '#002d2b#00968f', '#00968f', '#002d2b', 'Lucida', 1, 'Circle', 'Left', 1, 2, 0, 'No-Animation', '3444e6d5-25ff-5e66-84e2-83127dd744ed', 1, '2022-12-10 13:34:30', '2022-12-16 11:18:19', 5),
(4, 'Apsis solutions services', 'Bubble-Video-file-1671189499155.mp4', 'Bubble-Video-file-1671189499155.gif', 25, 'View My Projects updated', 170, '#002d2b#00968f', '#00968f', '#002d2b', 'Lucida', 1, 'Circle', 'Left', 1, 2, 0, 'No-Animation', '36087d1e-dc4c-40c0-122a-27e2c25704b7', 1, '2023-03-08 13:11:59', '2023-03-08 13:11:59', 10),
(6, 'Enosis solutions limited', 'Bubble-Video-file-1671189499155.mp4', 'Bubble-Video-file-1671189499155.gif', 25, 'View My Projects', 170, '#002d2b#00968f', '#00968f', '#002d2b', 'Lucida', 1, 'Circle', 'Left', 1, 2, 0, 'No-Animation', 'dd3c7aa3-a387-5b92-386f-2e8c8da550b8', 1, '2023-03-13 17:43:21', '2023-03-13 17:43:21', 10);

-- --------------------------------------------------------

--
-- Table structure for table `Bugs`
--

CREATE TABLE `Bugs` (
  `id` int NOT NULL,
  `bug_text` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bug_code` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Bugs`
--

INSERT INTO `Bugs` (`id`, `bug_text`, `bug_code`, `is_deleted`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'test2', 'Akk5C1b', 1, '2022-12-09 13:18:11', '2022-12-09 14:30:38', 2),
(2, 'Jooo', 'NFPASEl', 0, '2022-12-12 18:00:47', '2022-12-12 18:00:47', 2),
(3, 'Admin', 'khFUpey', 0, '2023-03-03 19:13:56', '2023-03-03 19:13:56', 7),
(4, 'Admin', '8Kx0FW3', 0, '2023-03-04 07:39:17', '2023-03-04 07:39:17', 7);

-- --------------------------------------------------------

--
-- Table structure for table `Chats`
--

CREATE TABLE `Chats` (
  `id` int NOT NULL,
  `chat_cookie_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `chat_code` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `client_name` text CHARACTER SET latin1 COLLATE latin1_swedish_ci,
  `client_ip_address` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `client_city` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `client_country` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `client_email` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `hoster_id` int DEFAULT NULL,
  `bubble_id` int DEFAULT NULL,
  `chat_date` datetime DEFAULT NULL,
  `subscriber_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Chats`
--

INSERT INTO `Chats` (`id`, `chat_cookie_id`, `chat_code`, `client_name`, `client_ip_address`, `client_city`, `client_country`, `client_email`, `hoster_id`, `bubble_id`, `chat_date`, `subscriber_id`, `created_at`, `updated_at`) VALUES
(1, 'OWUqOYOLEt', 'MmcyG', 'welcome ', '197.60.180.121', 'Giza', 'Egypt', 'test@gmail.com', 1, 1, '2022-12-09 12:58:47', 1, '2022-12-09 12:47:24', '2022-12-09 12:58:47'),
(2, 'nAdpm4xWoY', 'xH7sg', 'shad', '203.76.222.186', 'Narayanganj', 'Bangladesh', 'webcodecare20@gmail.com', 1, 1, '2022-12-09 18:41:26', 4, '2022-12-09 18:34:07', '2022-12-09 18:41:26'),
(3, 'd6jZf2FZSk', 'FR5sC', 'test', '197.60.180.121', 'Giza', 'Egypt', 'testweb223344@gmail.com', 5, 3, '2022-12-10 14:24:04', 5, '2022-12-10 14:22:52', '2022-12-10 14:24:04'),
(11, 'mB2fNhhWNf', 'AwpYn', 'dsa', '197.60.59.207', 'Giza', 'Egypt', 'sda@gsol.co', 5, 3, '2022-12-16 00:39:35', 5, '2022-12-16 00:39:17', '2022-12-16 00:39:35');

-- --------------------------------------------------------

--
-- Table structure for table `Messages`
--

CREATE TABLE `Messages` (
  `id` int NOT NULL,
  `sender_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `receiver_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `chat_code` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `chat_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Messages`
--

INSERT INTO `Messages` (`id`, `sender_id`, `time`, `receiver_id`, `bubble_id`, `chat_code`, `content`, `is_read`, `created_at`, `updated_at`, `chat_id`, `user_id`) VALUES
(1, 'MmcyG', '2022-12-09 12:47:34', '1', '1', 'MmcyG', 'hello', 1, '2022-12-09 12:47:34', '2022-12-09 12:47:41', 1, 1),
(2, '1', '2022-12-09 12:47:41', 'test@gmail.com', '1', 'MmcyG', 'hello', 1, '2022-12-09 12:47:41', '2022-12-09 12:47:41', 1, 1),
(3, '1', '2022-12-09 12:47:46', 'test@gmail.com', '1', 'MmcyG', 'how can I help you', 1, '2022-12-09 12:47:46', '2022-12-09 12:47:46', 1, 1),
(4, 'MmcyG', '2022-12-09 12:47:53', '1', '1', 'MmcyG', 'cool all is setup', 1, '2022-12-09 12:47:53', '2022-12-09 12:48:01', 1, 1),
(5, 'MmcyG', '2022-12-09 12:50:42', '1', '1', 'MmcyG', '>>', 1, '2022-12-09 12:50:42', '2022-12-09 12:58:56', 1, 1),
(6, 'MmcyG', '2022-12-09 12:58:47', '1', '1', 'MmcyG', '?', 1, '2022-12-09 12:58:47', '2022-12-09 12:58:56', 1, 1),
(7, 'xH7sg', '2022-12-09 18:34:09', '1', '1', 'xH7sg', 'hi', 1, '2022-12-09 18:34:09', '2022-12-09 18:41:21', 2, 1),
(8, '1', '2022-12-09 18:41:26', 'webcodecare20@gmail.com', '1', 'xH7sg', 'xc', 1, '2022-12-09 18:41:26', '2022-12-09 18:41:26', 2, 1),
(9, 'FR5sC', '2022-12-10 14:23:14', '5', '3', 'FR5sC', 'hello', 1, '2022-12-10 14:23:14', '2022-12-10 14:23:23', 3, 5),
(10, '5', '2022-12-10 14:23:26', 'testweb223344@gmail.com', '3', 'FR5sC', 'hi', 1, '2022-12-10 14:23:26', '2022-12-10 14:23:26', 3, 5),
(11, 'FR5sC', '2022-12-10 14:23:35', '5', '3', 'FR5sC', 'how can I find these products?', 1, '2022-12-10 14:23:35', '2022-12-10 14:23:50', 3, 5),
(12, '5', '2022-12-10 14:23:50', 'testweb223344@gmail.com', '3', 'FR5sC', 'check this page!', 1, '2022-12-10 14:23:50', '2022-12-10 14:23:50', 3, 5),
(13, 'FR5sC', '2022-12-10 14:24:04', '5', '3', 'FR5sC', 'ok thanks', 1, '2022-12-10 14:24:04', '2022-12-15 20:52:20', 3, 5),
(120, 'AwpYn', '2022-12-16 00:39:33', '5', '3', 'AwpYn', '.fvd', 0, '2022-12-16 00:39:33', '2022-12-16 00:39:33', 11, 5),
(121, 'AwpYn', '2022-12-16 00:39:35', '5', '3', 'AwpYn', 'fdg', 0, '2022-12-16 00:39:35', '2022-12-16 00:39:35', 11, 5);

-- --------------------------------------------------------

--
-- Table structure for table `Notes`
--

CREATE TABLE `Notes` (
  `id` int NOT NULL,
  `note_text` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `note_code` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Notes`
--

INSERT INTO `Notes` (`id`, `note_text`, `note_code`, `is_deleted`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'test', 'OrDaMTp', 0, '2022-12-09 13:18:05', '2022-12-09 13:18:05', 2),
(2, 'Admin', 'dKY534c', 0, '2023-02-27 19:21:16', '2023-02-27 19:21:16', 7),
(3, 'Admin', 'Q6EhKFN', 1, '2023-02-27 19:22:16', '2023-02-27 19:22:16', 7),
(4, 'Admin', 'M3nGMX3', 0, '2023-03-01 15:31:51', '2023-03-01 15:31:51', 7),
(5, 'Admin', '9ErLWlj', 0, '2023-03-01 15:33:31', '2023-03-01 15:33:31', 7),
(6, 'Admin', 'l4YrKtP', 0, '2023-03-01 15:33:41', '2023-03-01 15:33:41', 7),
(7, 'Admin', '3RnLBSw', 0, '2023-03-01 15:38:44', '2023-03-01 15:38:44', 7),
(8, 'Admin', '4r0gqek', 1, '2023-03-03 18:58:20', '2023-03-03 18:58:20', 7),
(9, 'Admin', '2ucVOz4', 1, '2023-03-04 07:33:42', '2023-03-04 07:33:42', 7);

-- --------------------------------------------------------

--
-- Table structure for table `Notifications`
--

CREATE TABLE `Notifications` (
  `id` int NOT NULL,
  `reason` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `to` int DEFAULT NULL,
  `sender` int DEFAULT NULL,
  `content` longtext CHARACTER SET latin1 COLLATE latin1_swedish_ci,
  `since` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `seen` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Plans`
--

CREATE TABLE `Plans` (
  `id` int NOT NULL,
  `pname` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `order` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `code` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL,
  `bubble` int DEFAULT NULL,
  `visitor` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Plans`
--

INSERT INTO `Plans` (`id`, `pname`, `duration`, `order`, `price`, `code`, `created_at`, `updated_at`, `user_id`, `bubble`, `visitor`) VALUES
(1, 'Free', 1, 1, 0, 'CGBasicPType', '2022-12-09 11:57:18', '2022-12-09 11:57:18', NULL, 1, 500),
(2, 'Build', 1, 2, 19, 'CGBuildPType', '2022-12-09 11:57:18', '2022-12-10 03:28:25', NULL, 2, 10000),
(3, 'Growth', 1, 3, 25, 'CGGrowthPType', '2022-12-09 11:57:18', '2022-12-09 11:57:18', NULL, 3, 40000),
(4, 'Expand', 1, 4, 49, 'CGExpandPType', '2022-12-09 11:57:18', '2022-12-09 11:57:18', NULL, 4, 100000),
(5, 'Scale', 1, 5, 99, 'CGScalePType', '2022-12-09 11:57:18', '2022-12-09 11:57:18', NULL, 5, 300000);

-- --------------------------------------------------------

--
-- Table structure for table `planTables`
--

CREATE TABLE `planTables` (
  `id` int NOT NULL,
  `exercise_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `exercise` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `reps` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `sets` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `is_super_set` tinyint(1) DEFAULT NULL,
  `is_rest` tinyint(1) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `day` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `week` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `row_id` int DEFAULT NULL,
  `gif` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Subscribers`
--

CREATE TABLE `Subscribers` (
  `id` int NOT NULL,
  `pname` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `pcode` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `subscriber` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `subscriber_id` int DEFAULT NULL,
  `price` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `duration` int DEFAULT '1',
  `current_month` int DEFAULT '1',
  `end_subscribe_date` datetime DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `is_finished` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `plan_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Subscribers`
--

INSERT INTO `Subscribers` (`id`, `pname`, `pcode`, `subscriber`, `subscriber_id`, `price`, `duration`, `current_month`, `end_subscribe_date`, `is_active`, `is_finished`, `created_at`, `updated_at`, `plan_id`, `user_id`) VALUES
(1, 'Free', 'CGBasicPType', 'Admin', 1, '0', 1, 1, '2023-01-08 12:29:07', 0, 1, '2022-12-09 12:29:07', '2022-12-09 14:12:03', 1, 1),
(2, 'Free', 'CGBasicPType', 'test', 3, '0', 1, 1, '2023-01-08 12:54:31', 1, 0, '2022-12-09 12:54:31', '2022-12-09 12:54:31', 1, 3),
(3, 'Free', 'CGBasicPType', 'shad', 2, '0', 1, 1, '2023-01-08 13:17:55', 1, 0, '2022-12-09 13:17:55', '2022-12-09 13:17:55', 1, 2),
(4, 'Growth', 'CGGrowthPType', 'Admin', 1, '25', 1, 1, '2023-01-08 14:12:03', 1, 0, '2022-12-09 14:12:03', '2022-12-09 14:12:03', 3, 1),
(5, 'Free', 'CGBasicPType', 'test', 5, '0', 1, 1, '2023-01-08 21:26:27', 1, 0, '2022-12-09 21:26:27', '2022-12-09 21:26:27', 1, 5),
(6, 'gh', 'ghvj', 'cfgvhb', 8, '12', 2, 1, '2023-01-08 12:29:07', 0, 0, '2023-03-04 11:36:43', '2023-03-04 11:36:43', 3, 7),
(7, 'Free', 'CGBasicPType', '2020belayethossain', 22, '0', 1, 1, '2023-04-09 15:34:40', 1, 0, '2023-03-09 09:34:40', '2023-03-09 09:34:40', 1, 22),
(8, 'Free', 'CGBasicPType', '2020belayethossain', 23, '0', 1, 1, '2023-04-09 15:36:58', 1, 0, '2023-03-09 09:36:58', '2023-03-09 09:36:58', 1, 23),
(9, 'Free', 'CGBasicPType', '2020belayethossain', 24, '0', 1, 1, '2023-04-09 15:38:59', 1, 0, '2023-03-09 09:38:59', '2023-03-09 09:38:59', 1, 24);

-- --------------------------------------------------------

--
-- Table structure for table `SystemInfos`
--

CREATE TABLE `SystemInfos` (
  `id` int NOT NULL,
  `logo_mage` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `meta_title` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `meta_description` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `notification_sound` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `code` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `bubble_id` int DEFAULT NULL,
  `max_video_size` int DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SystemInfos`
--

INSERT INTO `SystemInfos` (`id`, `logo_mage`, `meta_title`, `meta_description`, `notification_sound`, `code`, `bubble_id`, `max_video_size`, `created_at`, `updated_at`) VALUES
(1, 'Dashboard-logo.png', 'completegreet', 'Add Meta Description', 'https://assets.mixkit.co/sfx/preview/mixkit-happy-bells-notification-937.mp3', 'CGSystem', 1, 10000, '2022-12-09 11:57:18', '2022-12-14 07:53:23');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `user_group` int DEFAULT NULL,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `image` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `cropped_image` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `business_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `industry` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `website_url` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `goals` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `is_enrolled` tinyint(1) DEFAULT NULL,
  `banned` tinyint(1) DEFAULT NULL,
  `verified` tinyint(1) DEFAULT NULL,
  `live_on_bubble` tinyint(1) DEFAULT '1',
  `send_email` tinyint(1) DEFAULT '1',
  `push_notification` tinyint(1) DEFAULT '0',
  `pass_reset` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `google_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `verify_code` text CHARACTER SET latin1 COLLATE latin1_swedish_ci,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `greet_msg` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT 'Hey, thanks for visiting! Feel free to ask anything.'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `user_group`, `name`, `email`, `password`, `image`, `cropped_image`, `business_name`, `industry`, `website_url`, `goals`, `is_enrolled`, `banned`, `verified`, `live_on_bubble`, `send_email`, `push_notification`, `pass_reset`, `google_id`, `verify_code`, `created_at`, `updated_at`, `greet_msg`) VALUES
(1, 1200, 'Admin', 'Admin@completegreet.com', '$2a$10$hveuN5xL/siq37otPP2YyeQxIjQFfHgKG98pCcvLhi9Jj0KNa3lni', NULL, NULL, 'Complete Greet', 'SAAS', 'Completegreet.com ', 'Goals', 0, 0, 1, 1, 1, 1, NULL, NULL, 'none', '2022-12-09 11:57:18', '2022-12-10 03:03:49', 'Hey, thanks for visiting! Feel free to ask anything.'),
(2, 1, 'shad', 'webcodecare20@gmail.com', '$2a$10$OOwYDYV2dekKMP1vUJFZKeYRu5fmkgmKdmZH4v5Tv9xNL8ZN2RY7m', NULL, NULL, 'webcodecare', 'it', 'https://webcodecare.com/', 'Personal lead generation', 0, 0, 0, 1, 1, 1, NULL, NULL, 'IVD7HN1NVNGHI6XSWBMGAUL4PBTQKFB1E47', '2022-12-09 12:35:18', '2022-12-09 14:30:31', 'Hey, thanks for visiting! Feel free to ask anything.'),
(3, 1, 'test', 'test@gmail.com', '$2a$10$If6d2RKaZYGnJXhsdjqS1.7G2RRrMra1Kb9kkr30OpYmiPwLKAt.u', 'Profile-Pic-1670590486521.gif', NULL, 'dsa', 'dsa', 'dsao.com', 'Personalize client communication', 0, 0, 0, 1, 1, 0, NULL, NULL, 'OFTHWQJF7H3N0FU3JITZF0815QITVE2UBI5', '2022-12-09 12:54:04', '2022-12-09 12:54:46', 'Hey, thanks for visiting! Feel free to ask anything.'),
(5, 1, 'test', 'testweb223344@gmail.com', '$2a$10$zAjLCs93.KM4OBzo4I7xgO8VllXvS0.83TVW4SkaSa0amuok1iUDe', NULL, NULL, 'sda', 'dsa', 'dasd.com', 'Personalize client communication', 0, 0, 0, 1, 1, 0, 'BG4TC', NULL, 'R3K2MIG4VOCBN6MTLSB2KGGEVVBHZXMH0Z5', '2022-12-09 21:24:50', '2022-12-11 20:00:00', 'Hey, thanks for visiting! Feel free to ask anything.'),
(6, NULL, 'Admin', 'admin@gmail.com', '$2b$10$lDerxO0AckpcQLHG1PyE4.2lDqRg5UHlBBOwwpw1ZinSwVu/364W.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, 0, NULL, NULL, NULL, '2023-02-24 17:44:51', '2023-02-24 17:44:51', 'Hey, thanks for visiting! Feel free to ask anything.'),
(7, NULL, NULL, 'admin12@gmail.com', '$2b$10$CeUDPy7ZQaE8U9pRl/8RieiX2BejUxTHQmIFJpLxk2jpnUIiMabPi', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 1, 1, 0, NULL, NULL, '9248afcbf9', '2023-02-25 06:49:41', '2023-02-25 06:49:41', 'Hey, thanks for visiting! Feel free to ask anything.'),
(10, NULL, 'Ruhul Amin', 'ruhul.cse7862@gmail.com', '$2b$10$qeRWxxLjrihBjlOYFNQG4eXKcRGUEGrzJ5nZfIsK3G76a.cVv1I5O', NULL, NULL, 'AppDev', 'software Company', 'www.appdev.com', 'something', 0, 0, 0, 1, 1, 0, NULL, NULL, '6363c06a60', '2023-02-26 17:46:44', '2023-02-26 17:46:44', 'Hey, thanks for visiting! Feel free to ask anything.'),
(11, NULL, 'Admin', 'admin102@gmail.com', '$2a$10$t87D3.MueIQVnG7nwNl4NOdpLUNabI7y/1aR60ZQ1.i0rYwrwUtLa', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 1, 1, 0, NULL, NULL, '5bf8e12d05', '2023-03-04 07:31:31', '2023-03-04 07:31:31', 'Hey, thanks for visiting! Feel free to ask anything.'),
(12, NULL, 'Admin', 'admin1092@gmail.com', '$2a$10$Z1XVrJhwL/FA2Tjaob5wdudkWN3r3A9tY6k2cS9lBE9uuqcQJuGbu', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 1, 1, 0, NULL, NULL, '6e267500c8', '2023-03-04 07:32:32', '2023-03-04 07:32:32', 'Hey, thanks for visiting! Feel free to ask anything.'),
(13, NULL, 'Admin', 'admin1042@gmail.com', '$2a$10$q0RjeYS/eIRhwynTcut9buj43GvHbiA.U3/BWe13SZoqp2q/DZ6me', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 1, 1, 0, NULL, NULL, 'b00b580f28', '2023-03-04 07:33:20', '2023-03-04 07:33:20', 'Hey, thanks for visiting! Feel free to ask anything.'),
(14, NULL, '2020belayethossain', '2020belayethossain@gmail.com', '$2a$10$5s81cCLOScfpPhWI6BUB4utp59jhYtmjNdxuRY4azzwMXG/VWKNli', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 1, 1, 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNCwiZW1haWwiOiIyMDIwYmVsYXlldGhvc3NhaW5AZ21haWwuY29tIiwiZXhwaXJlc0luIjoiMTRkIiwiaWF0IjoxNjc4MjE0MDA0fQ.HfCfIWAhqGRKF_XOWZNLWZ2mK0XBSPRv2J4C5ho6Eps', NULL, 'afb31fc85e', '2023-03-05 18:05:17', '2023-03-05 18:05:17', 'Hey, thanks for visiting! Feel free to ask anything.'),
(21, NULL, '2020belayethossain', '2027belayethossain@gmail.com', '$2b$10$mc2MDe5lulnngClBj4wbiuzSgysia.SL6ieuyf.5snpQCB.H/9gU2', NULL, NULL, '', '', '', '', 0, 0, 0, 1, 1, 0, NULL, NULL, 'e157860a00', '2023-03-09 09:33:24', '2023-03-09 09:33:24', 'Hey, thanks for visiting! Feel free to ask anything.'),
(22, NULL, '2020belayethossain', '2023belayethossain@gmail.com', '$2b$10$JyWYqNhMy.2K74imo7iR0uwGrGWlYaaa1ZvXJx1EswLQwIFQAbK/e', NULL, NULL, '', '', '', '', 0, 0, 0, 1, 1, 0, NULL, NULL, 'a128337352', '2023-03-09 09:34:39', '2023-03-09 09:34:39', 'Hey, thanks for visiting! Feel free to ask anything.'),
(23, NULL, '2020belayethossain', '2028belayethossain@gmail.com', '$2b$10$G.MOVRs4DkZlmK3JME7aaOaTSV4OjRpqUN8SHnGZgbhE4hAZtTKDS', NULL, NULL, '', '', '', '', 0, 0, 0, 1, 1, 0, NULL, NULL, '819bf890b0', '2023-03-09 09:36:57', '2023-03-09 09:36:57', 'Hey, thanks for visiting! Feel free to ask anything.'),
(24, NULL, '2020belayethossain', '2029belayethossain@gmail.com', '$2b$10$rh22cZmcmXAwZxRyK50iE.qbtS6gk6eWLVjpZuuf7DMulXvis5P9m', NULL, NULL, '', '', '', '', 0, 0, 0, 1, 1, 0, NULL, NULL, '7d1547f008', '2023-03-09 09:38:59', '2023-03-09 09:38:59', 'Hey, thanks for visiting! Feel free to ask anything.');

-- --------------------------------------------------------

--
-- Table structure for table `Visitors`
--

CREATE TABLE `Visitors` (
  `id` int NOT NULL,
  `ip_address` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `subscriber_id` int DEFAULT NULL,
  `bubble_id` int DEFAULT NULL,
  `country` text CHARACTER SET latin1 COLLATE latin1_swedish_ci,
  `city` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Visitors`
--

INSERT INTO `Visitors` (`id`, `ip_address`, `user_id`, `subscriber_id`, `bubble_id`, `country`, `city`, `created_at`, `updated_at`) VALUES
(1, '197.60.180.121', 1, 1, 1, 'Egypt', 'Giza', '2022-12-09 12:46:29', '2022-12-09 12:46:29'),
(2, '203.76.222.186', 1, 1, 1, 'Bangladesh', 'Narayanganj', '2022-12-09 12:56:23', '2022-12-09 12:56:23'),
(3, '105.207.92.132', 1, 1, 1, 'Egypt', 'Giza', '2022-12-09 13:04:35', '2022-12-09 13:04:35'),
(4, '188.228.125.32', 1, 4, 1, 'Denmark', 'Holstebro', '2022-12-10 13:03:53', '2022-12-10 13:03:53'),
(5, '66.249.93.30', 1, 4, 1, 'United States', 'Ashburn', '2022-12-11 03:00:15', '2022-12-11 03:00:15'),
(6, '66.249.93.28', 1, 4, 1, 'United States', 'Ashburn', '2022-12-11 03:00:16', '2022-12-11 03:00:16'),
(7, '66.249.93.10', 5, 5, 3, 'United States', 'Ashburn', '2022-12-11 03:03:55', '2022-12-11 03:03:55'),
(8, '168.119.65.108', 5, 5, 3, 'Germany', 'Falkenstein', '2022-12-11 10:42:39', '2022-12-11 10:42:39'),
(9, '203.76.222.187', 1, 4, 1, 'Bangladesh', 'Narayanganj', '2022-12-11 11:04:04', '2022-12-11 11:04:04'),
(10, '182.18.206.249', 1, 4, 1, 'Philippines', 'Quezon City', '2022-12-11 16:28:05', '2022-12-11 16:28:05'),
(11, '111.119.183.26', 1, 4, 1, 'Pakistan', 'Karachi', '2022-12-11 17:07:38', '2022-12-11 17:07:38'),
(12, '212.112.148.159', 1, 4, 1, 'Denmark', 'Brønderslev', '2022-12-11 21:59:24', '2022-12-11 21:59:24'),
(13, '37.111.218.215', 1, 4, 1, 'Bangladesh', 'Tongi', '2022-12-12 15:20:38', '2022-12-12 15:20:38'),
(14, 'Not found', 1, 4, 1, NULL, NULL, '2022-12-12 18:09:10', '2022-12-12 18:09:10'),
(15, '156.187.101.21', 1, 4, 1, 'Egypt', 'Cairo', '2022-12-12 22:53:02', '2022-12-12 22:53:02'),
(16, '197.60.155.71', 5, 5, 3, 'Egypt', 'Cairo', '2022-12-13 01:34:11', '2022-12-13 01:34:11'),
(17, '168.119.68.235', 5, 5, 3, 'Germany', 'Falkenstein', '2022-12-13 13:26:38', '2022-12-13 13:26:38'),
(18, '197.60.214.137', 5, 5, 3, 'Egypt', 'Cairo', '2022-12-13 21:31:12', '2022-12-13 21:31:12'),
(19, '66.249.76.60', 5, 5, 3, 'United States', 'Ashburn', '2022-12-14 02:29:30', '2022-12-14 02:29:30'),
(20, '192.175.111.228', 1, 4, 1, 'Canada', 'Hamilton', '2022-12-14 08:56:56', '2022-12-14 08:56:56'),
(21, '72.55.136.156', 1, 4, 1, 'Canada', 'Longueuil', '2022-12-14 08:57:03', '2022-12-14 08:57:03'),
(22, '192.175.111.242', 1, 4, 1, 'Canada', 'Hamilton', '2022-12-14 08:57:15', '2022-12-14 08:57:15'),
(23, '64.15.129.116', 1, 4, 1, 'Canada', 'Montreal', '2022-12-14 08:57:19', '2022-12-14 08:57:19'),
(24, '192.175.111.231', 1, 4, 1, 'Canada', 'Hamilton', '2022-12-14 08:57:21', '2022-12-14 08:57:21'),
(25, '64.15.129.119', 1, 4, 1, 'Canada', 'Montreal', '2022-12-14 08:57:28', '2022-12-14 08:57:28'),
(26, '70.38.27.252', 1, 4, 1, 'Canada', 'Montreal', '2022-12-14 08:57:30', '2022-12-14 08:57:30'),
(27, '64.15.129.117', 1, 4, 1, 'Canada', 'Montreal', '2022-12-14 08:57:36', '2022-12-14 08:57:36'),
(28, '64.15.129.118', 1, 4, 1, 'Canada', 'Montreal', '2022-12-14 08:57:48', '2022-12-14 08:57:48'),
(29, '18.185.36.38', 1, 4, 1, 'Germany', 'Frankfurt am Main', '2022-12-14 08:59:49', '2022-12-14 08:59:49'),
(30, '197.60.59.207', 5, 5, 3, 'Egypt', 'Giza', '2022-12-14 20:02:08', '2022-12-14 20:02:08'),
(31, '66.249.66.156', 5, 5, 3, 'United States', 'Ashburn', '2022-12-14 21:32:16', '2022-12-14 21:32:16'),
(32, '195.154.122.30', 5, 5, 3, 'France', 'Ivry-sur-Seine', '2022-12-14 22:49:41', '2022-12-14 22:49:41'),
(33, '105.88.5.6', 1, 4, 1, 'Egypt', 'Kirdasah', '2022-12-14 23:41:05', '2022-12-14 23:41:05'),
(34, '35.156.182.26', 1, 4, 1, 'Germany', 'Frankfurt am Main', '2022-12-15 00:41:24', '2022-12-15 00:41:24'),
(35, '77.241.136.64', 1, 4, 1, 'Denmark', 'Copenhagen', '2022-12-15 10:17:06', '2022-12-15 10:17:06'),
(36, '77.241.128.119', 1, 4, 1, 'Denmark', 'Copenhagen', '2022-12-15 13:27:27', '2022-12-15 13:27:27'),
(37, '156.187.175.79', 5, 5, 3, 'Egypt', 'Cairo', '2022-12-15 18:20:57', '2022-12-15 18:20:57'),
(38, '168.119.68.126', 5, 5, 3, 'Germany', 'Falkenstein', '2022-12-16 12:26:18', '2022-12-16 12:26:18'),
(39, '35.214.242.237', 5, 5, 3, 'Netherlands', 'Groningen', '2022-12-16 20:57:57', '2022-12-16 20:57:57'),
(40, '203.76.222.184', 1, 4, 1, 'Bangladesh', 'Narayanganj', '2022-12-17 05:55:14', '2022-12-17 05:55:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Blogs`
--
ALTER TABLE `Blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Bubbles`
--
ALTER TABLE `Bubbles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`user_id`);

--
-- Indexes for table `Bugs`
--
ALTER TABLE `Bugs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`user_id`);

--
-- Indexes for table `Chats`
--
ALTER TABLE `Chats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Messages`
--
ALTER TABLE `Messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ChatId` (`chat_id`),
  ADD KEY `UserId` (`user_id`);

--
-- Indexes for table `Notes`
--
ALTER TABLE `Notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`user_id`);

--
-- Indexes for table `Notifications`
--
ALTER TABLE `Notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`user_id`);

--
-- Indexes for table `Plans`
--
ALTER TABLE `Plans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`user_id`);

--
-- Indexes for table `planTables`
--
ALTER TABLE `planTables`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Subscribers`
--
ALTER TABLE `Subscribers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PlanId` (`plan_id`),
  ADD KEY `UserId` (`user_id`);

--
-- Indexes for table `SystemInfos`
--
ALTER TABLE `SystemInfos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Visitors`
--
ALTER TABLE `Visitors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Blogs`
--
ALTER TABLE `Blogs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Bubbles`
--
ALTER TABLE `Bubbles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Bugs`
--
ALTER TABLE `Bugs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Chats`
--
ALTER TABLE `Chats`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `Messages`
--
ALTER TABLE `Messages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT for table `Notes`
--
ALTER TABLE `Notes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `Notifications`
--
ALTER TABLE `Notifications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Plans`
--
ALTER TABLE `Plans`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `planTables`
--
ALTER TABLE `planTables`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Subscribers`
--
ALTER TABLE `Subscribers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `SystemInfos`
--
ALTER TABLE `SystemInfos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `Visitors`
--
ALTER TABLE `Visitors`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Bubbles`
--
ALTER TABLE `Bubbles`
  ADD CONSTRAINT `Bubbles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Bugs`
--
ALTER TABLE `Bugs`
  ADD CONSTRAINT `Bugs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Messages`
--
ALTER TABLE `Messages`
  ADD CONSTRAINT `Messages_ibfk_317` FOREIGN KEY (`chat_id`) REFERENCES `Chats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Messages_ibfk_318` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Notes`
--
ALTER TABLE `Notes`
  ADD CONSTRAINT `Notes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Notifications`
--
ALTER TABLE `Notifications`
  ADD CONSTRAINT `Notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Plans`
--
ALTER TABLE `Plans`
  ADD CONSTRAINT `Plans_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Subscribers`
--
ALTER TABLE `Subscribers`
  ADD CONSTRAINT `Subscribers_ibfk_319` FOREIGN KEY (`plan_id`) REFERENCES `Plans` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Subscribers_ibfk_320` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
