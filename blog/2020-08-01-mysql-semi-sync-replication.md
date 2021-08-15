---
slug: mysql-semin-sync-replication
title: MySQL半同步性能指标
author: wubx
author_title: Datafuse Labs
tags: [mysql, replication]
---

MySQL 半同步性能标获取方法：

mysql>show global status like “%semi%”;

带有 master 的表示在 master 端
带有 slave 的表示在 slave 有效

<!--truncate-->

**Rpl_semi_sync_master_clients**

现在有几个半同步的复制客户端和 Master 保持连接。

**Rpl_semi_sync_master_net_avg_wait_time**

该值用于表示 Master 平均用于等 Slave 给响应的时间。在 5.7.4 及后续版本这个值永远为 0，在 MySQL 5.7.8 这个值被移除。

**Rpl_semi_sync_master_net_wait_time**

Master 等待 slave 给响应占用的总时间。同 Rpl_semi_sync_master_net_avg_wait_time 将移弃的一个值。

**Rpl_semi_sync_master_net_waits**

Master 等待 Slave 给响应的总次数。如果该值增长明显，说明 Slave 上的响应能力下降或网络有延迟。

**Rpl_semi_sync_master_no_times**

Master 使用异步复制的次数。也可以理解为使用异步传输日志的次数。

**Rpl_semi_sync_master_no_tx**

从库没有给主库做 Ack 响应，但主库执行成功的次数。

**Rpl_semi_sync_master_status**

表示主库上是不是开启 semi 复制，在启用 semi 复制后，这个值为：On。 如果为：OFf，可以理解为半同步复制的那个 plugin 没有安装或是没有启用; 或是因为超时原因 Master 已经切换到异步复制。

**Rpl_semi_sync_master_timefunc_failures**

Master 上调用函数 gettimeofday()失败的次数。

**Rpl_semi_sync_master_tx_avg_wait_time**

Master 每个事务提交平均用于等待的时间，单位 microseconds

**Rpl_semi_sync_master_tx_wait_time**

Master 用于事务提交总共用于等待的时间，单位 microseconds

**Rpl_semi_sync_master_tx_waits**

Master 上总共用于待待 Slave 给响应的次数

**Rpl_semi_sync_master_wait_pos_backtravers**

主库用于写 Binlog 时等待的次数。

**Rpl_semi_sync_master_wait_sessions**

当前会话下有几个等待需要 Slave 给响应的。

**Rpl_semi_sync_master_yes_tx**

多少个得到 Slave 响应的事务提交。

**Rpl_semi_sync_slave_status**

用于标识 Slave 端是不是启用了 semi 复制。如果使用了 Semi 复制，该值为 On。反之为：OFF。

作者：吴炳锡　来源：http://mysqlsupport.cn 联系方式： wubingxi#163.com 转载请注明作/译者和出处，并且不能用于商业用途违者必究.
