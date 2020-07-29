<template>
    <div>
        <div style="margin-bottom: 16px">
            <a-button type="primary" :disabled="!hasSelected" :loading="loading" @click="start">
                Reload
            </a-button>
            <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{ `Selected ${selectedRowKeys.length} items` }}
        </template>
            </span>
        </div>
        <a-table
                :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                :columns="columns"
                :data-source="data"
                size="small"
        />
    </div>
</template>
<script>
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]

  const data = []
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    })
  }
  import Vue from 'vue'

  export default Vue.extend({
    name: 'y-table',
    data () {
      return {
        data,
        columns,
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
      }
    },
    computed: {
      hasSelected () {
        return this.selectedRowKeys.length > 0
      },
    },
    methods: {
      start () {
        this.loading = true
        // ajax request after empty completing
        setTimeout(() => {
          this.loading = false
          this.selectedRowKeys = []
        }, 1000)
      },
      onSelectChange (selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.selectedRowKeys = selectedRowKeys
      },
    },
  })
</script>
