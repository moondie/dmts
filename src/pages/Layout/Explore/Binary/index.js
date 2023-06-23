/**
 * 此页面实现二进制到源代码的特征迁移分析
 * 展示内容：
 * 毕业论文实验图
 */

import DocViewer from "@cyntler/react-doc-viewer";
import { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import React from "react";

const BinaryToSourceFeature = () => {
    const docs = [
        { uri: require("@/assets/binary.pdf") }, // Local File
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


export default BinaryToSourceFeature