# CssChange Day1

css动画可以通过animation-play-state属性来控制是否暂停，它有两个值：`running | paused`

<!-- 值得一提的是，我在这里用了margin-left来实现动画，但是margin-left是涉及到回流的，所以每次从20-19，19-18的时候，都需要主线程重新计算一次，然后交给合成器线程生成动画，所以会比较占用性能；但是如果使用transform呢？ -->

[动画性能研究](http://zencode.in/18.CSS-animation%E5%92%8Ctransition%E7%9A%84%E6%80%A7%E8%83%BD%E6%8E%A2%E7%A9%B6.html)
