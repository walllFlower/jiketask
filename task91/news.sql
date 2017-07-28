-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017-07-10 08:18:52
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdnews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` varchar(200) CHARACTER SET utf8 NOT NULL,
  `newstitle` varchar(200) CHARACTER SET utf8 NOT NULL,
  `newsimg` varchar(200) CHARACTER SET utf8 NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` varchar(200) CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=ucs2;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(1, '社会', '村民举报荒坡怪异土堆 警察挖开发现是“藏宝”', './img/u%3D1018093261.JPEG', '2017-06-10 00:00:00', '网易新闻'),
(2, '推荐', '大学生拍毕业照复现世界名画', './img/timg.jpg', '2017-06-11 00:00:00', '凤凰新闻'),
(3, '社会', '习近平结束对哈萨克斯坦访问并出席活动后回京', './img/f2deb48f8c5494ee4.jpg', '2017-06-11 00:00:00', '新华社'),
(9, '推荐', '人民币对美元市场一片欢腾 人民币升值通道开启?', './img/u%3D163961957.JPG', '2017-06-11 00:00:00', '搜狐新闻'),
(15, '科技', '身家涨得比马云还猛！许家印1427亿超越丁磊，直追顺丰王卫', './img/u%3Drvtrsergrcsegs.JPEG', '2017-06-11 00:00:00', '金评媒'),
(16, '科技', 'QQ微信只是工具? 腾讯第一季度收入495.52亿是怎么赚来的', './img/u%3D163961957.JPG', '2017-06-11 00:00:00', '搜狐科技'),
(17, '国际', '俄袭击嫌犯与警方枪战数小时，父亲来劝也不听', './img/u%3D14906391.JPEG', '2017-06-10 00:00:00', '网易新闻'),
(35, '推荐', '安倍拟下月伊始改组内阁 计划维持核心阵容', './img/u=1793476537,4264939187&fm=80&w=179&h=119&img.JPEG', '2017-07-08 00:00:00', '环球网'),
(23, '国际', '库克MIT演讲：不担心AI能像人类一样思考；担心人类像AI一样思考，没价值观或同情心', './img/u%3D236519633.PNG', '2017-06-11 00:00:00', 'IT时代周刊');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
