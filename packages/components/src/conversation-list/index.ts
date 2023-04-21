import withInstall from '../utils/withInstall';
// @ts-ignore
import conversationList from "./src/index.vue";

// 导出 install
const ConversationList = withInstall(conversationList as any);
// 导出ConversationList组件
export default ConversationList;
