<template>
    <div class="">
      <q-layout view="lHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
        <q-header elevated class="bg-cyan-8">
          <q-toolbar>
            <q-toolbar-title>Artisan</q-toolbar-title>
            <q-item clickable v-ripple to="/login">Login</q-item>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          </q-toolbar>
        </q-header>
  
        <q-drawer
          v-model="drawer"
          show-if-above
          :width="200"
          :breakpoint="400"
        >
          <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
            <q-list padding>
              <q-item clickable v-ripple  :to="{name: 'orderhistory'}">
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>
  
                <q-item-section>
                  Order History
                </q-item-section>
              </q-item>
  
              <q-item clickable v-ripple to="/pre-shipment">
                <q-item-section avatar>
                  <q-icon name="star" />
                </q-item-section>
  
                <q-item-section>
                  Pre Shipment
                </q-item-section>
              </q-item>
  
              <q-item clickable v-ripple to="/post-shipment">
                <q-item-section avatar>
                  <q-icon name="send" />
                </q-item-section>
  
                <q-item-section>
                  Post Shipment
                </q-item-section>
              </q-item>
  
              <q-item clickable v-ripple to="/shipping-documents">
                <q-item-section avatar>
                  <q-icon name="drafts" />
                </q-item-section>
  
                <q-item-section>
                  Shipping Documents
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
  
          <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
            <div class="absolute-bottom bg-transparent">
              <q-avatar size="56px" class="q-mb-sm">
                <img src="https://lh3.googleusercontent.com/a/AAcHTtdQ3iADwJWbjT0ey7v7ArJCZK7lYNZChctaN0hmaw=s96-c-rg-br100">
              </q-avatar>
              <div class="text-weight-bold">Azizur Rahman</div>
              <div>Executive IT</div>
            </div>
          </q-img>
        </q-drawer>
  
        <q-page-container>
          <q-page padding>
            <router-view />
            <!-- <p v-for="n in 15" :key="n">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
            </p> -->
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      return {
        drawer: ref(false)
      }
    }
  }
  </script>
  