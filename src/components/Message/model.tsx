export const enum RoleMap {
  /** 周报 */
  WEEKLY_REPORT = 'WEEKLY_REPORT',
  /** james聊增长 */
  GROWTH_CHAT_BY_LAO_BAI = 'GROWTH_CHAT_BY_LAO_BAI',
  /** 简历编辑 */
  RESUME_EDITOR = 'RESUME_EDITOR',
  /** 编剧本 */
  SCRIPT_WRITER = 'SCRIPT_WRITER',
  /** 私人厨师 */
  PERSONAL_CHEF = 'PERSONAL_CHEF',
  /** 塔罗牌占卜 */
  TAROT_CARD_READING = 'TAROT_CARD_READING',
  /** 小红书文案 */
  XIAOHONGSHU_COPYWRITING = 'XIAOHONGSHU_COPYWRITING',
  /** 短视频脚本 */
  SHORT_VIDEO_SCRIPT = 'SHORT_VIDEO_SCRIPT',
  /** 默认 */
  DEFAULT = 'DEFAULT'
}
export const RoleInfoList: {
  icon: string;
  text: string;
  type: RoleMap;
}[] = [{
  icon: 'icon',
  text: '周报',
  type: RoleMap.WEEKLY_REPORT
}, {
  icon: 'icon',
  text: 'james聊增长',
  type: RoleMap.GROWTH_CHAT_BY_LAO_BAI
}, {
  icon: 'icon',
  text: '简历编辑',
  type: RoleMap.RESUME_EDITOR
},{
  icon: 'icon',
  text: '编剧本',
  type: RoleMap.SCRIPT_WRITER
}, {
  icon: 'icon',
  text: '私人厨师',
  type: RoleMap.PERSONAL_CHEF
}, {
  icon: 'icon',
  text: '塔罗牌占卜',
  type: RoleMap.TAROT_CARD_READING
}, {
  icon: 'icon',
  text: '小红书文案',
  type: RoleMap.XIAOHONGSHU_COPYWRITING
}, {
  icon: 'icon',
  text: '短视频脚本',
  type: RoleMap.SHORT_VIDEO_SCRIPT
}];
export const RoleMessageMap: Record<RoleMap, string> = {
  /** 周报 */
  [RoleMap.WEEKLY_REPORT]: `
  我将根据您提供的信息来编辑周报，请输入本周完成任务、下周计划

  如：本周完成任务
  1、设计了3张图
  2、分销员模块的原型设计
  下周计划
  1、会员模块产品设计
  2、客户跟进
  `,
  /** james聊增长 */
  [RoleMap.GROWTH_CHAT_BY_LAO_BAI]: `hi~ 我是james，来聊聊AI如何助力to B、to C市场增长，试试输入问题，考考我呗~`,
  /** 简历编辑 */
  [RoleMap.RESUME_EDITOR]: `我将帮助您检查简历是否存在任何错误或需要改进的地方，请输入简历内容。简历内容包括，自我评价、工作经验、项目经验`,
  /** 编剧本 */
  [RoleMap.SCRIPT_WRITER]: `我是一个编剧，我可以根据你的需求编写出引人入胜且富有创意的剧本，你可以说出你的需求。如：我需要写一部浪漫剧情电影`,
  /** 私人厨师 */
  [RoleMap.PERSONAL_CHEF]: `我是你的私人厨师，你可以告诉我你的饮食偏好和过敏，我会建议你尝试的食谱。如：今晚吃什么？`,
  /** 塔罗牌占卜 */
  [RoleMap.TAROT_CARD_READING]: `在这个神秘的世界里，塔罗牌是一扇窥探未来的大门。让我们一起打开它，深入探索您内心的迷雾，找到答案和方向。请告诉我您的问题：`,
  /** 小红书文案 */
  [RoleMap.XIAOHONGSHU_COPYWRITING]: `
  请输入您的要求或主题



  例如输入要求：
  
  gpt-link快捷好用是重点文案！所有的文案必须带以下任意一句文字：
  
  1、gpt-link是玩AI必备的工具！
  
  2、gpt-link是打工人晚上必备的聊天伴侣！
  
  3、都说AI收费贵！但gpt-link品质工艺着实卷到了极致
  
  4、gpt-link值得挑战！带上爱提问的朋友一起玩！
  
  
  
  输入主题：玩AI就找「gpt-link」，一个能让你用AI赚钱的平台
  `,
  /** 短视频脚本 */
  [RoleMap.SHORT_VIDEO_SCRIPT]: `输入视频脚本主题，如：讲解小米手机，小米手机的主要特点为价格便宜，性能高`,
  /** 默认 */
  [RoleMap.DEFAULT]: 'You are a helpful assistant. You can help me by answering my questions. You can also ask me questions.'
};