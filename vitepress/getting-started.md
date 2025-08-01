# 快速开始

本指南将帮助您快速安装和配置哆啦A梦，让您在几分钟内开始使用流量转发功能。

::: tip 需要帮助？
📱 [加入 Telegram 群组](https://t.me/+wdVDni1fdyI0YzE1) | 🐛 [GitHub Issues](https://github.com/bqlpfy/forward-panel/issues) | 🤔 [常见问题](/faq)
:::

## 系统要求

在开始之前，请确保您的系统满足以下要求：

- **操作系统**: Linux (推荐 Ubuntu 18.04+, CentOS 7+) 或 macOS，**推荐纯净系统安装**
- **Docker**: 20.10+ 
- **Docker Compose**: 1.29+ 或 Docker 内置 compose 命令
- **内存**: 至少 1GB RAM
- **存储**: 至少 1GB 可用空间
- **网络**: 确保相关端口未被占用

## 一键安装（推荐）

我们提供了交互式安装脚本，会自动检测系统环境并引导您完成配置：

```bash
curl -L https://raw.githubusercontent.com/bqlpfy/forward-panel/refs/heads/main/panel_install.sh -o panel_install.sh && chmod +x panel_install.sh && ./panel_install.sh
```

### 安装流程说明

1. **运行脚本后选择操作**：
   ```
   ===============================================
             面板管理脚本
   ===============================================
   请选择操作：
   1. 安装面板      ← 选择这个
   2. 更新面板
   3. 卸载面板
   4. 退出
   ===============================================
   ```

2. **输入配置参数**：
   - **面板服务器地址**: 需要节点服务器能正常访问的地址
   - **前端端口**: 默认 6366
   - **后端端口**: 默认 6365

3. **自动化处理**：
   - 检测 Docker 环境
   - 自动检测 IPv6 支持并选择合适的配置
   - 生成随机的数据库配置
   - 下载并启动服务

### 配置示例

```bash
当前面板服务器地址: 192.168.1.100  # 或您的公网IP
前端端口（默认 6366）: 6366         # 直接回车使用默认值
后端端口（默认 6365）: 6365         # 直接回车使用默认值
```

## 验证安装

### 1. 检查服务状态

```bash
# 使用 docker-compose
docker-compose ps

# 或使用 docker compose
docker compose ps
```

您应该看到以下服务都处于 `Up` 状态：
- `gost-mysql` - 数据库服务
- `springboot-backend` - 后端 API 服务
- `vue-frontend` - 前端 Web 界面

### 2. 访问 Web 界面

打开浏览器访问：`http://your-server-ip:6366`

### 3. 登录系统

使用默认管理员账号登录：
- **用户名**: `admin_user`
- **密码**: `admin_user`

⚠️ **重要**: 首次登录后请立即修改默认密码！

## IPv6 支持

脚本会自动检测系统的 IPv6 支持：

- ✅ **支持 IPv6**: 自动使用 IPv6 配置文件并配置 Docker IPv6 支持
- ⚠️ **不支持 IPv6**: 使用 IPv4 配置文件

### Docker IPv6 配置

如果检测到 IPv6 支持，脚本会自动配置：

```json
{
  "ipv6": true,
  "fixed-cidr-v6": "fd00::/80"
}
```

## 端口说明

| 端口 | 服务 | 说明 | 可配置 |
|------|------|------|--------|
| 6366 | Web 界面 | 前端管理界面 | ✅ |
| 6365 | API 服务 | 后端 REST API | ✅ |
| 3306 | MySQL | 数据库服务（容器内部） | ❌ |
| 动态分配 | 转发端口 | 用户创建的转发规则 | ✅ |

## 获取帮助

如果在安装过程中遇到问题：

1. **💬 Telegram 群组**（推荐）
   - [立即加入](https://t.me/+wdVDni1fdyI0YzE1) 
   - 实时技术支持，快速响应

2. **🔍 故障排除**
   - 查看安装日志和错误信息
   - 检查系统要求是否满足
   - 验证 Docker 和网络配置

3. **🐛 GitHub Issues**
   - [报告安装问题](https://github.com/bqlpfy/forward-panel/issues/new)
   - 查看 [已知问题](https://github.com/bqlpfy/forward-panel/issues)

4. **📖 文档资源**
   - [使用指南](/guide) - 详细的操作教程
   - [常见问题](/faq) - 快速解决方案和管理操作指南 