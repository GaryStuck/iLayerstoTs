<template>
  <div>
    <a-table :columns="columns" :pagination="pagination"
             size="small"
             @onSelectChange="onSelectChange"
             :data-source="data">
      <template slot="action" slot-scope="text, record">
        <a @click="handleEdit(text,record)">{{record}}编辑</a>
      </template>
    </a-table>
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
      key: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      key: 'Address',
      dataIndex: 'address',
    },
    {
      title: '操作',
      key: 'action',
      dataIndex: 'action',
      scopedSlots: { customRender: 'action' },    //这一行自定义渲染这一列
    }
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

  export default {
    data () {
      return {
        data,
        columns,
        pagination: {
          size: 'small',
          pageSizeOptions: ['10', '20', '30', '40', '50'],
          current: 1,
          pageSize: 10,
          total: 46,
          showSizeChanger: true,
          showQuickJumper: true
        },
        selectedRowKeys: [], // Check here to configure the default column
      }
    },
    components: {},
    computed: {},
    methods: {
      handleEdit (a, b) {
        console.log(a, b)
      },
      onSelectChange (selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.selectedRowKeys = selectedRowKeys
      },
    },
  }
</script>
