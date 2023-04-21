import withInstall from '../utils/withInstall';
// @ts-ignore
import conversationWindow from "./src/index.vue";

// 导出 install
const ConversationWindow = withInstall(conversationWindow as any);
// 导出ConversationList组件
export default ConversationWindow;
