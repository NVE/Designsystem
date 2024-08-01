
<template>
        <p>TODO Implement a solution that fetch the latest version of the Components</p>

        <LinkButton URL="https://www.figma.com/design/0eXhyUrUF7fWi1VaphfpEu/04---%E2%9D%96-Komponenter?node-id=111-25&m=dev" text="Status for alle komponenter" :openInNewTab="true"/>

    <div>
      <table>
        <thead>
          <tr>
            <th>Publisert versjon</th>
            <th>Type komponent</th>
            <th>Status design</th>
            <th>Status kode</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in componentsVersions" :key="index">
            <td>{{ row.publishedVersion }}</td>
            <td>
              <a :href="row.typeComponentLink">{{ row.typeComponent }}</a>
              <div>{{ row.description }}</div>
            </td>
            <td>
              <span class="status">{{ row.statusDesign }}</span>
              <a @click.prevent="openINewTab(row.statusDesignLink)" href="#">Åpne i Figma</a>
            </td>
            <td>{{ row.statusCode }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
    import LinkButton from './LinkButton.vue';
    import { componentsVersions } from '@assets/componentVersionsData.js';

    const openINewTab = (url: string) => {
      window.open(url, '_blank');
    };

  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
    text-align: left;
  }
  
  .status {
    display: inline-block;
    background-color: #e0e0e0;
    padding: 2px 5px;
    border-radius: 3px;
    margin-right: 10px;
  }
  </style>
  