/**
 * 此页面实现不同性别代码特征差异分析
 * 展示内容：
 * 不同性别编写代码风格差异的柱状图、解释性文字和总结
 */

import React from "react";
import DocViewer from "@cyntler/react-doc-viewer";
import { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const GenderFeature = () => {
    const docs = [
        { uri: require("@/assets/gender.pdf") }, // Local File
    ]
    return (
        < DocViewer documents={docs} pluginRenderers={DocViewerRenderers} theme={{
            primary: "#5296d8",
            secondary: "#ffffff",
            tertiary: "#5296d899",
            textPrimary: "#ffffff",
            textSecondary: "#5296d8",
            textTertiary: "#00000099",
            disableThemeScrollbar: false,
        }}></DocViewer >
    )
}

export default GenderFeature