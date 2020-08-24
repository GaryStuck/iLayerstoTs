<template>
  <div class="web-font">
    {{$t('title.code')}}
    <div style="width: 150px" class="web-font">
      <a-tree-select
          class="web-font"
          v-model="value"
          style="width: 100%"
          :tree-data="treeData"
          tree-checkable
          :show-checked-strategy="SHOW_PARENT"
          search-placeholder="Please select"
      />
    </div>
    <a-pagination
        show-size-changer
        :default-current="3"
        :total="500"
    />
  </div>
</template>

<script>
  import { TreeSelect } from 'ant-design-vue';
  const SHOW_PARENT = TreeSelect.SHOW_PARENT;

  const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
          disabled: true,
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
        },
      ],
    },
  ];
  export default {
    name: 'YunQFeng',
    data() {
      return {
        value: ['0-0-0'],
        treeData,
        SHOW_PARENT,
      };
    },
  };
</script>
