<template>
  <div>
    <header class="bg-gray-100">
  <div class="container mx-auto py-2 px-0">
    <img
      src="/src/assets/img/Direct-banking-lvb_01.jpg"
      alt="logo"
      class="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto"
    />
  </div>
</header>


<nav class="hidden sm:block bg-gray-200 h-[70px] flex justify-between items-center px-4 sm:px-6 md:px-6 xl:max-w-screen-2xl mx-auto">
      <div
        class="container mx-auto py-3 px-5 flex items-center justify-between"
      >
        <!-- Left section -->
        <ul class="flex space-x-6">
          <li><a href="#" class="">Home</a></li>
          <li class="relative group">
            <a href="#" class="hover:underline">Customer Account</a>
            <ul
              v-show="isDropdownVisible"
              class="absolute bg-white text-black border border-gray-300 rounded shadow-md p-2 space-y-2 hidden group-hover:block"
              @mouseover="showDropdown"
            >
              <li>
                <a href="#" class="block hover:underline w-[200px]">Register</a>
              </li>
              <li>
                <a href="#" class="block hover:underline">Customer List</a>
              </li>
              <li>
                <a href="#" class="block hover:underline">Authorize Customer</a>
              </li>
              <li>
                <a href="#" class="block hover:underline"
                  >Reset Password Customer</a
                >
              </li>
              <li>
                <a href="#" class="block hover:underline">Change Password</a>
              </li>
            </ul>
          </li>
          <li class="relative group">
            <a href="#" class="hover:underline">Report</a>
            <ul
              v-show="isDropdownVisible"
              class="absolute bg-white text-black border border-gray-300 rounded shadow-md p-2 space-y-2 hidden group-hover:block"
              @mouseover="showDropdown"
              @mouseleave="hideDropdown"
            >
              <li>
                <a href="#" class="block hover:underline w-[160px]"
                  >Report Customer List</a
                >
              </li>
            </ul>
          </li>
          <li class="relative group">
            <a href="#" class="hover:underline">Admin</a>
            <ul
              v-show="isDropdownVisible"
              class="absolute bg-white text-black border border-gray-300 rounded shadow-md p-2 space-y-2 hidden group-hover:block"
              @mouseover="showDropdown"
            >
              <li>
                <a href="#" class="block hover:underline w-[110px]"
                  >Register User</a
                >
              </li>
              <li><a href="#" class="block hover:underline">User List</a></li>
            </ul>
          </li>
        </ul>
        <!-- Right section -->
        <div class="flex space-x-4">
          <div class="custom-select">
            <button @click="toggleDropdown">
              <span v-if="check === 'la'">
                <img
                  src="@/assets/img/laos-flag.png"
                  alt="flag"
                  class="flag-icon"
              /></span>
              <span v-else-if="check === 'en'">
                <img
                  src="@/assets/img/united-states-flag-icon.png"
                  alt="flag"
                  class="flag-icon"
              /></span>
              <span v-else>
                <img
                  src="@/assets/img/vietnam-flag.png"
                  alt="flag"
                  class="flag-bt"
              /></span>
            </button>
            <ul v-if="isOpen" class="dropdown">
              <li
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option.value)"
              >
                <img
                  :src="getImagePath(option.img)"
                  alt="flag"
                  class="flag-icon"
                />

                {{ option.language }}
              </li>
            </ul>
          </div>
          <a href="#" class="hover:underline py-2 px-2">
            <img
              src="@/assets/icons/icon-exit-white.png"
              alt="icon-exit"
              style="width: 25px; height: 25px"
          /></a>
        </div>
      </div>
    </nav>
    <div class="m-screen h-screen flex">
      <!-- Side bar -->
      <div
        class="hidden max-sm:block w-[300px] h-full bg-gray-200 text-white"
        v-show="showSide"
      >
        <div class="h-[calc(100vh-50px)] bg-gray-200 py-[20px]">
          <div
            class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
          >
            <div class="flex flex-col justify-between space-y-[10px]">
              <router-link
                to="/home"
                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-100 hover:bg-gray-100 hover:text-gray-900"
              >
                <div class="text-mg-l text-black">Home</div>
              </router-link>
              <router-link
                to=""
                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-100 hover:text-gray-900"
              >
                <div class="text-mg-l text-black">Profile</div>
              </router-link>
            </div>
            <div class="h-[50px]">
              <div>
                <router-link
                  to="/"
                  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-100 hover:text-gray-900"
                >
                  <img
                    src="/src/assets/icons/icon-exit-red.png"
                    alt="icon-exit"
                    style="width: 20px; height: 20px"
                  />
                  <div class="text-mg-l text-black px-4">Exit</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full bg-gray-100">
        <div
          class="hidden max-sm:block h-[50px] flex items-center shadow-sm px-[5px] w-full py-[10px] z-10 border-b"
        >
          <!-- Hamburger menu -->
          <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5 7H19"
                  stroke="#000000"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5 12L19 12"
                  stroke="#000000"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5 17L19 17"
                  stroke="#000000"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div
          class="h-[calc(100%-50px)] bg-gray-50 p-[20px]"
          v-show="hiddenContent"
        >
          <div class="border border-gray-300 rounded-md p-[20px] h-full">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <!-- Main -->
    </div>

    <footer class="bg-gray-100">
      <div class="container mx-auto py-1 px-1">
        <img src="@/assets/img/Direct-banking-lvb_04.jpg" alt="logo" />
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
// import { useRouter } from "vue-router";
const props = defineProps({
  initialSearch: String,
});
// const search = ref(props.initialSearch || "");
// const router = useRouter();
const showSide = ref(false);
const hiddenContent = ref(true);
const isDropdownVisible = ref(true);
const isOpen = ref(false);
const selected = "en";
const options = ref([
  {
    value: "en",
    language: "US (EN)",
    img: "united-states-flag-icon.png",
  },
  {
    value: "la",
    language: "ລາວ (LA)",
    img: "laos-flag.png",
  },
  {
    value: "vn",
    language: "Tiếng việt (VN)",
    img: "vietnam-flag.png",
  },
]);
const showDropdown = () => {
      isDropdownVisible.value = true;
    };

    // const hideDropdown = () => {
    //   isDropdownVisible.value = false;
    // };

const toggleSideBar = () => {
  showSide.value = !showSide.value;
  hiddenContent.value = !showSide.value;
};

// const clearSearch = async () => {
//   await router.push("/profile");
//   search.value = "";
// };

// watch(search, (newSearch) => {
//   router.push({ query: { search: newSearch } }).catch(() => {});
// });
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selected.valueOf = option;
  //   currentLanguage.value = option;
  isOpen.value = false;
  localStorage.setItem("language", option);
};
const getImagePath = (img) => {
  return new URL(`/src/assets/img/${img}`, import.meta.url).href;
};
</script>

<style>
nav {
  background-image: url("@/assets/img/Direct-banking-lvb_07.jpg");
  background-size: cover; /* Scales the image to cover the navbar area */
  background-position: center; /* Centers the image in the navbar */
  background-repeat: no-repeat;
  color: white;
  border: 2px solid white;
}
/*  */
.ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  position: relative;
}

a {
  text-decoration: none;
  color: black;
  transition: color 0.3s;
}

a:hover {
  color: rgb(189, 0, 0);
  text-decoration: underline;
}

.group:hover .group-hover\\:block {
  display: block;
}

.hidden {
  display: none;
}

.block {
  display: block;
}

/* change language */
.custom-select {
  position: relative;
  display: inline-block;
}
.custom-select button {
  background: #f0f0f0;
  /* border: 2px solid black; */
  padding: 5px 5px;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  color: black;
  border-radius: 2px;
  width: 35px;
  height: 30px;
  margin-top: 5px;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  list-style: none;
  padding: 5px 10px 5px 5px;
  margin: 0;
  width: 130px;
  color: black;
}
.dropdown li {
  padding: 5px 10px 5px 5px;
  /* cursor: pointer; */
  font-size: 10px;
  display: flex;
  gap: 10px;
}

.dropdown li:hover {
  background: #eee;
}
.flag-icon {
  width: 20px;
  height: 15px;
}
.flag-bt {
  width: 20px;
  height: 15px;
  margin: 3px 0 0 2px;
}
</style>
