import React, { Component}  from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card} from 'antd';
import styles from './Welcome.less';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <PageHeaderWrapper>
        <Card className={styles.content}>
          <img src='/cloud.jpg' style={{width:'100%',height:'100%'}}/>
        </Card>
    </PageHeaderWrapper>
    )
  }
}
export default Index;


