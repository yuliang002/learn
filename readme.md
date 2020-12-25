采用 nacos 做为配置中心及路由中心

所有配置文件都是从配置中心获取： <br/>
配置文件：nacos--->dev-->cloud-config.properties <br/>

公用组件<br/>
learn-cloud-common  获取配置中心配置文件，所有的learn-cloud-* 都要依赖 <br/>
learn-shop-base-common  依赖learn-cloud-common，所有的learn-shop-admin-* 和learn-shop-core-* 都要依赖<br/>
learn-shop-base-pojo  po和vo以及ex，所有的learn-shop-admin-* 和learn-shop-core-* 都要依赖<br/>
learn-shop-base-tools 公用工具<br/>

核心服务，端口：87**： <br/>
nacos 注册中心，分布式配置中心 端口：8761 <br/>
learn-cloud-getaway 路由网关，端口：8771 <br/>
seata 分布式事务管理中心，端口：8721 <br/>

后端业务服务，端口：88**： <br/>
learn-shop-admin-user  用户管理服务，端口：8801 <br/>
learn-shop-admin-system  系统管理服务，端口：8811 <br/>

前台业务服务，端口：89**： <br/>
learn-shop-core-order   购物车服务，端口：8901 <br/>
learn-shop-core-cart   购物车服务，端口： <br/>
learn-shop-core-product   购物车服务，端口：8911 <br/>
learn-shop-core-search   搜索服务，端口：8981 <br/>



项目启动顺序： <br/>
* nacos
* seata
* learn-cloud-getaway
* 启动业务服务


访问：（通过路由） <br/>
注册中心、配置中心： <br/>
http://localhost:8761/nacos/index.html <br/>
用户名/密码：nacos/nacos

业务服务： <br/>
http://localhost:8771/core-order #订单相关 <br/>
http://localhost:8771/admin-user #用户相关 <br/>

RabbitMQ: 管理页面 <br>
http://localhost:15672 <br>
用户名/密码：admin/admin123

Druid: 管理页面 <br>
http://localhost:<port>/druid <br>

Swagger2: 管理页面 <br>
http://localhost:<port>/swagger-ui.html（查看单个） <br>
http://localhost:8771/swagger-ui.html（查看聚合） <br>
或者进入注册中心点击实例链接直接查看<br/>

**注意**： <br/>
0.特别提醒：如果使用本地配置文件需要修改learn-cloud-config下的resources里面的application.yml的search-locations修改为本地路径<br/>
1.添加新服务时，要在learn-cloud-gateway中添加路由表 <br/>
&nbsp;core-order: <br/>
&nbsp;&nbsp;&nbsp;&nbsp;path: /core-order/** <br/>
&nbsp;&nbsp;&nbsp;&nbsp;serviceId: learn-shop-core-order <br/>

2.使用配置中心时， <br/>
配置中心启动时会向注册中心注册，这里注册中心还没启动会报异常，不用关心 <br/>
如果是learn-cloud-* pom中添加learn-cloud-common依赖<br/>
如果是learn-shop-admin-* 和learn-shop-core-* pom中添加learn-shop-base-common依赖 <br/>

3.项目启动先要条件 <br>
* RabbitMQ, rabbitmq-server.bat <br/>
        添加新用户：admin 密码：admin123，修改admin用为超级管理员 <br/>
        查询所有用户：rabbitmqctl.bat list_users  <br/>
        添加新用户: rabbitmqctl.bat add_user  username password  <br/>
        赋予用户权限：rabbitmqctl.bat set_user_tags username administrator <br/>
        在admin中设定虚拟主机（virtual-host）为/learn-default <br/>
* redis启动

4.[swagger2注解](https://www.jianshu.com/p/12f4394462d5)使用说明 <br/>

<br/>

HTTP Method 与 CURD 数据处理操作对应<br/>

POST Create 新增一个没有id的资源<br/>

GET Read 取得一个资源<br/>

PUT Update 更新一个资源。或新增一个含 id 资源(如果 id 不存在)<br/>

DELETE Delete 删除一个资源<br/>