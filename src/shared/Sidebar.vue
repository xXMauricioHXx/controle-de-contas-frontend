<template>
  <div>
    <div class="row topbar">
      <div class="col-xs-6 topbar-left">

      </div>
      <div class="col-xs-6 topbar-right">
        <i class="icon-topbar fas fa-bars visible-xs" v-on:click="showSidebar"></i>
      </div>
    </div>
    <div
      class="col-xs-12 col-sm-3 col-md-2 sidebar"
      v-bind:class="[ this.isVisibleSidebar ? 'slide-right': 'slide-left']"
    >
      <div class="items">
        <i class="close-sidebar fas fa-times visible-xs" v-on:click="showSidebar"></i>
        <ul class="sidebar-items">
          <li class="item" @click="showSidebar">
            <router-link to="/">
              <a>
                <i class="icon fas fa-dollar-sign"></i>
                Contas
              </a>
            </router-link>
          </li>
          <li class="item" @click="showSidebar">            
            <router-link to="/cartoes">
              <a>
                <i class="icon fa fa-credit-card"></i>
                Cartões
              </a>
            </router-link>
          </li>
          <li class="item" @click="showSidebar">
            <router-link to="configuracao">
              <a>
                <i class="icon fas fa-cogs"></i>
                Configuração
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isVisibleSidebar: false
    };
  },
  methods: {
    showSidebar: function() {
      if (this.isVisibleSidebar) {
        this.isVisibleSidebar = false;
      } else {
        this.isVisibleSidebar = true;
      }
    }
  }
};
</script>>

<style >
.sidebar {
  height: 100vh;
  background-color: #fff;
  padding: 0px;
  border-right: 1px solid #ededed;
  transition: 0.5s;
  z-index: 10000;
  -webkit-box-shadow: 22px -1px 34px -27px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 22px -1px 34px -27px rgba(0, 0, 0, 0.75);
  box-shadow: 22px -1px 34px -27px rgba(0, 0, 0, 0.75);
}

.items .icon {
  color: #639;
  display: block;
  font-size: 4rem;
  margin-bottom: 1rem;
}

.sidebar-items {
  padding: 0px;
}
.sidebar-items li {
  display: block;
  padding: 3rem;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #ededed;
  position: relative;
}
.sidebar-items li a {
  text-decoration: none;
  font-weight: bold;
  font-size: 1.7rem;
  transition: 0.5;
  color: #639;
}
.sidebar-items li:before {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  left: -1rem;
  top: 5rem;
  transform: rotate(45deg);
  background-color: #639;
  display: none;
  transition: 1;
}
.sidebar-items li:last-child {
  border-bottom: 0px;
}
.sidebar-items li:hover {
  cursor: pointer;
}
.sidebar-items li a:hover {
  text-decoration: none;
  color: #639;
}
.sidebar-items li:hover:before {
  display: block;
}
.topbar {
  border-bottom: 1px solid #ededed;
  min-height: 10vh;
  background-color: #fff;
  padding: 0px;
  margin: 0px;
  width: 100%;
  -webkit-box-shadow: 16px 20px 40px -27px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 16px 20px 40px -27px rgba(0, 0, 0, 0.75);
  box-shadow: 16px 20px 40px -27px rgba(0, 0, 0, 0.75);
}
.topbar-right {
  text-align: right;
}
.icon-topbar {
  font-size: 3rem;
  color: #639;
  padding: 1rem;
}

@media (max-width: 767px) {
  .topbar {
    border-bottom: 1px solid #639;
    min-height: 60px;
    max-height: 60px;
    box-shadow: none;
  }
  .topbar-left .icon-topbar {
    display: block;
  }
  .slide-left {
    position: absolute;
    left: -78rem;
    top: 0;
  }
  .slide-right {
    position: absolute;
    left: 0;
    top: 0;
  }
  .sidebar {
    width: 104%;
  }

  .sidebar .close-sidebar {
    z-index: 100000;
    position: absolute;
    right: 0rem;
    top: -1rem;
    border: 1px solid #639;
    padding: 2rem 2rem;
    border-radius: 50%;
    background-color: #639;
    color: #fff;
    font-size: 1.5rem;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .topbar {
    min-height: 15vh;
    -webkit-box-shadow: 16px 20px 40px -27px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 16px 20px 40px -27px rgba(0, 0, 0, 0.75);
    box-shadow: 16px 20px 40px -27px rgba(0, 0, 0, 0.75);
  }
}

@media (min-width: 992px) and (max-width: 1224px) {
  .topbar {
    min-height: 15vh;
    -webkit-box-shadow: 16px 20px 40px -27px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 16px 20px 40px -27px rgba(0, 0, 0, 0.75);
    box-shadow: 16px 20px 40px -27px rgba(0, 0, 0, 0.75);
  }
}
</style>
