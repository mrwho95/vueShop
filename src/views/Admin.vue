<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a
        id="show-sidebar"
        @click="closeMenu"
        class="btn btn-sm btn-dark"
        href="#"
      >
        <i class="fa fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">Vue Shop</a>
            <div id="close-sidebar" @click="closeMenu">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img
                class="img-responsive img-rounded"
                src="img/user.jpg"
                alt="User picture"
              />
            </div>
            <div class="user-info">
              <span class="user-name">
                Jhon
                <strong>Smith</strong>
              </span>
              <span class="user-role">Administrator</span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control search-menu"
                  placeholder="Search..."
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <!-- <li class="header-menu">
                <span>General</span>
              </li>-->
              <li>
                <router-link to="/admin/overview">
                  <i class="fa fa-tachometer-alt"></i>
                  <span class="menu-text">Overview</span>
                  <!-- <span class="badge badge-pill badge-warning">New</span> -->
                </router-link>
                <!-- <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">
                        Dashboard 1
                        <span class="badge badge-pill badge-success">Pro</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="#">Dashboard 3</a>
                    </li>
                  </ul>
                </div>-->
              </li>

              <!-- <li class="header-menu">
                <span>Extra</span>
              </li>-->
              <li>
                <router-link to="/admin/products">
                  <i class="fa fa-book"></i>
                  <span class="menu-text">Products</span>
                  <!-- <span class="badge badge-pill badge-primary">Beta</span> -->
                </router-link>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-calendar"></i>
                  <span class="menu-text">Orders</span>
                </a>
              </li>
              <li>
                <a @click="logout()">
                  <i class="fa fa-folder"></i>
                  <span class="menu-text">Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
        <!-- sidebar-footer  -->
        <div class="sidebar-footer">
          <div class="dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-bell"></i>
              <span class="badge badge-pill badge-warning notification">3</span>
            </a>
            <div
              class="dropdown-menu notifications"
              aria-labelledby="dropdownMenuMessage"
            >
              <div class="notifications-header">
                <i class="fa fa-bell"></i>
                Notifications
              </div>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                <div class="notification-content">
                  <div class="icon">
                    <i
                      class="fas fa-check text-success border border-success"
                    ></i>
                  </div>
                  <div class="content">
                    <div class="notification-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In totam explicabo
                    </div>
                    <div class="notification-time">6 minutes ago</div>
                  </div>
                </div>
              </a>
              <a class="dropdown-item" href="#">
                <div class="notification-content">
                  <div class="icon">
                    <i
                      class="fas fa-exclamation text-info border border-info"
                    ></i>
                  </div>
                  <div class="content">
                    <div class="notification-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In totam explicabo
                    </div>
                    <div class="notification-time">Today</div>
                  </div>
                </div>
              </a>
              <a class="dropdown-item" href="#">
                <div class="notification-content">
                  <div class="icon">
                    <i
                      class="fas fa-exclamation-triangle text-warning border border-warning"
                    ></i>
                  </div>
                  <div class="content">
                    <div class="notification-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In totam explicabo
                    </div>
                    <div class="notification-time">Yesterday</div>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-center" href="#"
                >View all notifications</a
              >
            </div>
          </div>
          <div class="dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-envelope"></i>
              <span class="badge badge-pill badge-success notification">7</span>
            </a>
            <div
              class="dropdown-menu messages"
              aria-labelledby="dropdownMenuMessage"
            >
              <div class="messages-header">
                <i class="fa fa-envelope"></i>
                Messages
              </div>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                <div class="message-content">
                  <div class="pic">
                    <img src="img/user.jpg" alt />
                  </div>
                  <div class="content">
                    <div class="message-title">
                      <strong>Jhon doe</strong>
                    </div>
                    <div class="message-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In totam explicabo
                    </div>
                  </div>
                </div>
              </a>
              <a class="dropdown-item" href="#">
                <div class="message-content">
                  <div class="pic">
                    <img src="img/user.jpg" alt />
                  </div>
                  <div class="content">
                    <div class="message-title">
                      <strong>Jhon doe</strong>
                    </div>
                    <div class="message-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In totam explicabo
                    </div>
                  </div>
                </div>
              </a>
              <a class="dropdown-item" href="#">
                <div class="message-content">
                  <div class="pic">
                    <img src="img/user.jpg" alt />
                  </div>
                  <div class="content">
                    <div class="message-title">
                      <strong>Jhon doe</strong>
                    </div>
                    <div class="message-detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In totam explicabo
                    </div>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-center" href="#"
                >View all messages</a
              >
            </div>
          </div>
          <div class="dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-cog"></i>
              <span class="badge-sonar"></span>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuMessage">
              <a class="dropdown-item" href="#">My profile</a>
              <a class="dropdown-item" href="#">Help</a>
              <a class="dropdown-item" href="#">Setting</a>
            </div>
          </div>
          <div>
            <a href="#">
              <i class="fa fa-power-off"></i>
            </a>
          </div>
          <div class="pinned-footer">
            <a href="#">
              <i class="fas fa-ellipsis-h"></i>
            </a>
          </div>
        </div>
      </nav>
      <!-- page-content  -->
      <main class="page-content pt-2">
        <router-view />
      </main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Hero from "@/components/Hero.vue";
import $ from "jquery";
import { fb } from "../firebase";

export default {
  name: "Admin",
  //   components: {
  //     Hero
  //   }

  methods: {
    closeMenu() {
      $(".page-wrapper").toggleClass("toggled");
    },
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
