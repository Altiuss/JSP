/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@webassemblyjs/ast/esm/clone.js":
/*!******************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/clone.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneNode: () => (/* binding */ cloneNode)
/* harmony export */ });
function cloneNode(n) {
  // $FlowIgnore
  return Object.assign({}, n);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertBinaryModule: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertBinaryModule),
/* harmony export */   assertBlockComment: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertBlockComment),
/* harmony export */   assertBlockInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertBlockInstruction),
/* harmony export */   assertByteArray: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertByteArray),
/* harmony export */   assertCallIndirectInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertCallIndirectInstruction),
/* harmony export */   assertCallInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertCallInstruction),
/* harmony export */   assertData: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertData),
/* harmony export */   assertElem: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertElem),
/* harmony export */   assertFloatLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertFloatLiteral),
/* harmony export */   assertFunc: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertFunc),
/* harmony export */   assertFuncImportDescr: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertFuncImportDescr),
/* harmony export */   assertFunctionNameMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertFunctionNameMetadata),
/* harmony export */   assertGlobal: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertGlobal),
/* harmony export */   assertGlobalType: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertGlobalType),
/* harmony export */   assertHasLoc: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.assertHasLoc),
/* harmony export */   assertIdentifier: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertIdentifier),
/* harmony export */   assertIfInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertIfInstruction),
/* harmony export */   assertIndexInFuncSection: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertIndexInFuncSection),
/* harmony export */   assertInstr: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertInstr),
/* harmony export */   assertInternalBrUnless: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertInternalBrUnless),
/* harmony export */   assertInternalCallExtern: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertInternalCallExtern),
/* harmony export */   assertInternalEndAndReturn: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertInternalEndAndReturn),
/* harmony export */   assertInternalGoto: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertInternalGoto),
/* harmony export */   assertLeadingComment: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertLeadingComment),
/* harmony export */   assertLimit: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertLimit),
/* harmony export */   assertLocalNameMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertLocalNameMetadata),
/* harmony export */   assertLongNumberLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertLongNumberLiteral),
/* harmony export */   assertLoopInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertLoopInstruction),
/* harmony export */   assertMemory: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertMemory),
/* harmony export */   assertModule: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertModule),
/* harmony export */   assertModuleExport: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertModuleExport),
/* harmony export */   assertModuleExportDescr: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertModuleExportDescr),
/* harmony export */   assertModuleImport: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertModuleImport),
/* harmony export */   assertModuleMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertModuleMetadata),
/* harmony export */   assertModuleNameMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertModuleNameMetadata),
/* harmony export */   assertNumberLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertNumberLiteral),
/* harmony export */   assertProducerMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertProducerMetadata),
/* harmony export */   assertProducerMetadataVersionedName: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertProducerMetadataVersionedName),
/* harmony export */   assertProducersSectionMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertProducersSectionMetadata),
/* harmony export */   assertProgram: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertProgram),
/* harmony export */   assertQuoteModule: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertQuoteModule),
/* harmony export */   assertSectionMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertSectionMetadata),
/* harmony export */   assertSignature: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertSignature),
/* harmony export */   assertStart: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertStart),
/* harmony export */   assertStringLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertStringLiteral),
/* harmony export */   assertTable: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertTable),
/* harmony export */   assertTypeInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertTypeInstruction),
/* harmony export */   assertValtypeLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertValtypeLiteral),
/* harmony export */   binaryModule: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.binaryModule),
/* harmony export */   blockComment: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.blockComment),
/* harmony export */   blockInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.blockInstruction),
/* harmony export */   byteArray: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.byteArray),
/* harmony export */   callIndirectInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.callIndirectInstruction),
/* harmony export */   callInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.callInstruction),
/* harmony export */   cloneNode: () => (/* reexport safe */ _clone__WEBPACK_IMPORTED_MODULE_5__.cloneNode),
/* harmony export */   data: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.data),
/* harmony export */   elem: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.elem),
/* harmony export */   floatLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.floatLiteral),
/* harmony export */   func: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.func),
/* harmony export */   funcImportDescr: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.funcImportDescr),
/* harmony export */   funcParam: () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.funcParam),
/* harmony export */   functionNameMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.functionNameMetadata),
/* harmony export */   getEndBlockByteOffset: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getEndBlockByteOffset),
/* harmony export */   getEndByteOffset: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getEndByteOffset),
/* harmony export */   getEndOfSection: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getEndOfSection),
/* harmony export */   getFunctionBeginingByteOffset: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getFunctionBeginingByteOffset),
/* harmony export */   getSectionMetadata: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getSectionMetadata),
/* harmony export */   getSectionMetadatas: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getSectionMetadatas),
/* harmony export */   getStartBlockByteOffset: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getStartBlockByteOffset),
/* harmony export */   getStartByteOffset: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getStartByteOffset),
/* harmony export */   getUniqueNameGenerator: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getUniqueNameGenerator),
/* harmony export */   global: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.global),
/* harmony export */   globalType: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.globalType),
/* harmony export */   identifier: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.identifier),
/* harmony export */   ifInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.ifInstruction),
/* harmony export */   indexInFuncSection: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.indexInFuncSection),
/* harmony export */   indexLiteral: () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.indexLiteral),
/* harmony export */   instr: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.instr),
/* harmony export */   instruction: () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.instruction),
/* harmony export */   internalBrUnless: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.internalBrUnless),
/* harmony export */   internalCallExtern: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.internalCallExtern),
/* harmony export */   internalEndAndReturn: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.internalEndAndReturn),
/* harmony export */   internalGoto: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.internalGoto),
/* harmony export */   isAnonymous: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.isAnonymous),
/* harmony export */   isBinaryModule: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isBinaryModule),
/* harmony export */   isBlock: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isBlock),
/* harmony export */   isBlockComment: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isBlockComment),
/* harmony export */   isBlockInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isBlockInstruction),
/* harmony export */   isByteArray: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isByteArray),
/* harmony export */   isCallIndirectInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isCallIndirectInstruction),
/* harmony export */   isCallInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isCallInstruction),
/* harmony export */   isData: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isData),
/* harmony export */   isElem: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isElem),
/* harmony export */   isExpression: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isExpression),
/* harmony export */   isFloatLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isFloatLiteral),
/* harmony export */   isFunc: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isFunc),
/* harmony export */   isFuncImportDescr: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isFuncImportDescr),
/* harmony export */   isFunctionNameMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isFunctionNameMetadata),
/* harmony export */   isGlobal: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isGlobal),
/* harmony export */   isGlobalType: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isGlobalType),
/* harmony export */   isIdentifier: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isIdentifier),
/* harmony export */   isIfInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isIfInstruction),
/* harmony export */   isImportDescr: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isImportDescr),
/* harmony export */   isIndexInFuncSection: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isIndexInFuncSection),
/* harmony export */   isInstr: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isInstr),
/* harmony export */   isInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isInstruction),
/* harmony export */   isInternalBrUnless: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isInternalBrUnless),
/* harmony export */   isInternalCallExtern: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isInternalCallExtern),
/* harmony export */   isInternalEndAndReturn: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isInternalEndAndReturn),
/* harmony export */   isInternalGoto: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isInternalGoto),
/* harmony export */   isIntrinsic: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isIntrinsic),
/* harmony export */   isLeadingComment: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isLeadingComment),
/* harmony export */   isLimit: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isLimit),
/* harmony export */   isLocalNameMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isLocalNameMetadata),
/* harmony export */   isLongNumberLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isLongNumberLiteral),
/* harmony export */   isLoopInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isLoopInstruction),
/* harmony export */   isMemory: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isMemory),
/* harmony export */   isModule: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isModule),
/* harmony export */   isModuleExport: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isModuleExport),
/* harmony export */   isModuleExportDescr: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isModuleExportDescr),
/* harmony export */   isModuleImport: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isModuleImport),
/* harmony export */   isModuleMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isModuleMetadata),
/* harmony export */   isModuleNameMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isModuleNameMetadata),
/* harmony export */   isNode: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isNode),
/* harmony export */   isNumberLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isNumberLiteral),
/* harmony export */   isNumericLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isNumericLiteral),
/* harmony export */   isProducerMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isProducerMetadata),
/* harmony export */   isProducerMetadataVersionedName: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isProducerMetadataVersionedName),
/* harmony export */   isProducersSectionMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isProducersSectionMetadata),
/* harmony export */   isProgram: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isProgram),
/* harmony export */   isQuoteModule: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isQuoteModule),
/* harmony export */   isSectionMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isSectionMetadata),
/* harmony export */   isSignature: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isSignature),
/* harmony export */   isStart: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isStart),
/* harmony export */   isStringLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isStringLiteral),
/* harmony export */   isTable: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isTable),
/* harmony export */   isTypeInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isTypeInstruction),
/* harmony export */   isValtypeLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isValtypeLiteral),
/* harmony export */   leadingComment: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.leadingComment),
/* harmony export */   limit: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.limit),
/* harmony export */   localNameMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.localNameMetadata),
/* harmony export */   longNumberLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.longNumberLiteral),
/* harmony export */   loopInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.loopInstruction),
/* harmony export */   memIndexLiteral: () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.memIndexLiteral),
/* harmony export */   memory: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.memory),
/* harmony export */   module: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.module),
/* harmony export */   moduleContextFromModuleAST: () => (/* reexport safe */ _transform_ast_module_to_module_context__WEBPACK_IMPORTED_MODULE_6__.moduleContextFromModuleAST),
/* harmony export */   moduleExport: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.moduleExport),
/* harmony export */   moduleExportDescr: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.moduleExportDescr),
/* harmony export */   moduleImport: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.moduleImport),
/* harmony export */   moduleMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata),
/* harmony export */   moduleNameMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.moduleNameMetadata),
/* harmony export */   nodeAndUnionTypes: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.nodeAndUnionTypes),
/* harmony export */   numberLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.numberLiteral),
/* harmony export */   numberLiteralFromRaw: () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.numberLiteralFromRaw),
/* harmony export */   objectInstruction: () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.objectInstruction),
/* harmony export */   orderedInsertNode: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.orderedInsertNode),
/* harmony export */   producerMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.producerMetadata),
/* harmony export */   producerMetadataVersionedName: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.producerMetadataVersionedName),
/* harmony export */   producersSectionMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.producersSectionMetadata),
/* harmony export */   program: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.program),
/* harmony export */   quoteModule: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.quoteModule),
/* harmony export */   sectionMetadata: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.sectionMetadata),
/* harmony export */   shiftLoc: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.shiftLoc),
/* harmony export */   shiftSection: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.shiftSection),
/* harmony export */   signature: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.signature),
/* harmony export */   signatureForOpcode: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.signatureForOpcode),
/* harmony export */   signatures: () => (/* reexport safe */ _signatures__WEBPACK_IMPORTED_MODULE_3__.signatures),
/* harmony export */   sortSectionMetadata: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.sortSectionMetadata),
/* harmony export */   start: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.start),
/* harmony export */   stringLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.stringLiteral),
/* harmony export */   table: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.table),
/* harmony export */   traverse: () => (/* reexport safe */ _traverse__WEBPACK_IMPORTED_MODULE_2__.traverse),
/* harmony export */   typeInstruction: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.typeInstruction),
/* harmony export */   unionTypesMap: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.unionTypesMap),
/* harmony export */   valtypeLiteral: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.valtypeLiteral),
/* harmony export */   withLoc: () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.withLoc),
/* harmony export */   withRaw: () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.withRaw)
/* harmony export */ });
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes */ "./node_modules/@webassemblyjs/ast/esm/nodes.js");
/* harmony import */ var _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-helpers.js */ "./node_modules/@webassemblyjs/ast/esm/node-helpers.js");
/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traverse */ "./node_modules/@webassemblyjs/ast/esm/traverse.js");
/* harmony import */ var _signatures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signatures */ "./node_modules/@webassemblyjs/ast/esm/signatures.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@webassemblyjs/ast/esm/utils.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone */ "./node_modules/@webassemblyjs/ast/esm/clone.js");
/* harmony import */ var _transform_ast_module_to_module_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transform/ast-module-to-module-context */ "./node_modules/@webassemblyjs/ast/esm/transform/ast-module-to-module-context/index.js");








/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/node-helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/node-helpers.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   funcParam: () => (/* binding */ funcParam),
/* harmony export */   indexLiteral: () => (/* binding */ indexLiteral),
/* harmony export */   instruction: () => (/* binding */ instruction),
/* harmony export */   memIndexLiteral: () => (/* binding */ memIndexLiteral),
/* harmony export */   numberLiteralFromRaw: () => (/* binding */ numberLiteralFromRaw),
/* harmony export */   objectInstruction: () => (/* binding */ objectInstruction),
/* harmony export */   withLoc: () => (/* binding */ withLoc),
/* harmony export */   withRaw: () => (/* binding */ withRaw)
/* harmony export */ });
/* harmony import */ var _webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webassemblyjs/helper-numbers */ "./node_modules/@webassemblyjs/helper-numbers/esm/index.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes */ "./node_modules/@webassemblyjs/ast/esm/nodes.js");


function numberLiteralFromRaw(rawValue) {
  var instructionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "i32";
  var original = rawValue; // Remove numeric separators _

  if (typeof rawValue === "string") {
    rawValue = rawValue.replace(/_/g, "");
  }

  if (typeof rawValue === "number") {
    return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.numberLiteral)(rawValue, String(original));
  } else {
    switch (instructionType) {
      case "i32":
        {
          return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.numberLiteral)((0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.parse32I)(rawValue), String(original));
        }

      case "u32":
        {
          return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.numberLiteral)((0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.parseU32)(rawValue), String(original));
        }

      case "i64":
        {
          return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.longNumberLiteral)((0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.parse64I)(rawValue), String(original));
        }

      case "f32":
        {
          return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.floatLiteral)((0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.parse32F)(rawValue), (0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.isNanLiteral)(rawValue), (0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.isInfLiteral)(rawValue), String(original));
        }
      // f64

      default:
        {
          return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.floatLiteral)((0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.parse64F)(rawValue), (0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.isNanLiteral)(rawValue), (0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.isInfLiteral)(rawValue), String(original));
        }
    }
  }
}
function instruction(id) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var namedArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.instr)(id, undefined, args, namedArgs);
}
function objectInstruction(id, object) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var namedArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.instr)(id, object, args, namedArgs);
}
/**
 * Decorators
 */

function withLoc(n, end, start) {
  var loc = {
    start: start,
    end: end
  };
  n.loc = loc;
  return n;
}
function withRaw(n, raw) {
  n.raw = raw;
  return n;
}
function funcParam(valtype, id) {
  return {
    id: id,
    valtype: valtype
  };
}
function indexLiteral(value) {
  // $FlowIgnore
  var x = numberLiteralFromRaw(value, "u32");
  return x;
}
function memIndexLiteral(value) {
  // $FlowIgnore
  var x = numberLiteralFromRaw(value, "u32");
  return x;
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/node-path.js":
/*!**********************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/node-path.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPath: () => (/* binding */ createPath)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function findParent(_ref, cb) {
  var parentPath = _ref.parentPath;

  if (parentPath == null) {
    throw new Error("node is root");
  }

  var currentPath = parentPath;

  while (cb(currentPath) !== false) {
    // Hit the root node, stop
    // $FlowIgnore
    if (currentPath.parentPath == null) {
      return null;
    } // $FlowIgnore


    currentPath = currentPath.parentPath;
  }

  return currentPath.node;
}

function insertBefore(context, newNode) {
  return insert(context, newNode);
}

function insertAfter(context, newNode) {
  return insert(context, newNode, 1);
}

function insert(_ref2, newNode) {
  var node = _ref2.node,
      inList = _ref2.inList,
      parentPath = _ref2.parentPath,
      parentKey = _ref2.parentKey;
  var indexOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!inList) {
    throw new Error('inList' + " error: " + ("insert can only be used for nodes that are within lists" || 0));
  }

  if (!(parentPath != null)) {
    throw new Error('parentPath != null' + " error: " + ("Can not remove root node" || 0));
  }

  // $FlowIgnore
  var parentList = parentPath.node[parentKey];
  var indexInList = parentList.findIndex(function (n) {
    return n === node;
  });
  parentList.splice(indexInList + indexOffset, 0, newNode);
}

function remove(_ref3) {
  var node = _ref3.node,
      parentKey = _ref3.parentKey,
      parentPath = _ref3.parentPath;

  if (!(parentPath != null)) {
    throw new Error('parentPath != null' + " error: " + ("Can not remove root node" || 0));
  }

  // $FlowIgnore
  var parentNode = parentPath.node; // $FlowIgnore

  var parentProperty = parentNode[parentKey];

  if (Array.isArray(parentProperty)) {
    // $FlowIgnore
    parentNode[parentKey] = parentProperty.filter(function (n) {
      return n !== node;
    });
  } else {
    // $FlowIgnore
    delete parentNode[parentKey];
  }

  node._deleted = true;
}

function stop(context) {
  context.shouldStop = true;
}

function replaceWith(context, newNode) {
  // $FlowIgnore
  var parentNode = context.parentPath.node; // $FlowIgnore

  var parentProperty = parentNode[context.parentKey];

  if (Array.isArray(parentProperty)) {
    var indexInList = parentProperty.findIndex(function (n) {
      return n === context.node;
    });
    parentProperty.splice(indexInList, 1, newNode);
  } else {
    // $FlowIgnore
    parentNode[context.parentKey] = newNode;
  }

  context.node._deleted = true;
  context.node = newNode;
} // bind the context to the first argument of node operations


function bindNodeOperations(operations, context) {
  var keys = Object.keys(operations);
  var boundOperations = {};
  keys.forEach(function (key) {
    boundOperations[key] = operations[key].bind(null, context);
  });
  return boundOperations;
}

function createPathOperations(context) {
  // $FlowIgnore
  return bindNodeOperations({
    findParent: findParent,
    replaceWith: replaceWith,
    remove: remove,
    insertBefore: insertBefore,
    insertAfter: insertAfter,
    stop: stop
  }, context);
}

function createPath(context) {
  var path = _objectSpread({}, context); // $FlowIgnore


  Object.assign(path, createPathOperations(path)); // $FlowIgnore

  return path;
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/nodes.js":
/*!******************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/nodes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertBinaryModule: () => (/* binding */ assertBinaryModule),
/* harmony export */   assertBlockComment: () => (/* binding */ assertBlockComment),
/* harmony export */   assertBlockInstruction: () => (/* binding */ assertBlockInstruction),
/* harmony export */   assertByteArray: () => (/* binding */ assertByteArray),
/* harmony export */   assertCallIndirectInstruction: () => (/* binding */ assertCallIndirectInstruction),
/* harmony export */   assertCallInstruction: () => (/* binding */ assertCallInstruction),
/* harmony export */   assertData: () => (/* binding */ assertData),
/* harmony export */   assertElem: () => (/* binding */ assertElem),
/* harmony export */   assertFloatLiteral: () => (/* binding */ assertFloatLiteral),
/* harmony export */   assertFunc: () => (/* binding */ assertFunc),
/* harmony export */   assertFuncImportDescr: () => (/* binding */ assertFuncImportDescr),
/* harmony export */   assertFunctionNameMetadata: () => (/* binding */ assertFunctionNameMetadata),
/* harmony export */   assertGlobal: () => (/* binding */ assertGlobal),
/* harmony export */   assertGlobalType: () => (/* binding */ assertGlobalType),
/* harmony export */   assertIdentifier: () => (/* binding */ assertIdentifier),
/* harmony export */   assertIfInstruction: () => (/* binding */ assertIfInstruction),
/* harmony export */   assertIndexInFuncSection: () => (/* binding */ assertIndexInFuncSection),
/* harmony export */   assertInstr: () => (/* binding */ assertInstr),
/* harmony export */   assertInternalBrUnless: () => (/* binding */ assertInternalBrUnless),
/* harmony export */   assertInternalCallExtern: () => (/* binding */ assertInternalCallExtern),
/* harmony export */   assertInternalEndAndReturn: () => (/* binding */ assertInternalEndAndReturn),
/* harmony export */   assertInternalGoto: () => (/* binding */ assertInternalGoto),
/* harmony export */   assertLeadingComment: () => (/* binding */ assertLeadingComment),
/* harmony export */   assertLimit: () => (/* binding */ assertLimit),
/* harmony export */   assertLocalNameMetadata: () => (/* binding */ assertLocalNameMetadata),
/* harmony export */   assertLongNumberLiteral: () => (/* binding */ assertLongNumberLiteral),
/* harmony export */   assertLoopInstruction: () => (/* binding */ assertLoopInstruction),
/* harmony export */   assertMemory: () => (/* binding */ assertMemory),
/* harmony export */   assertModule: () => (/* binding */ assertModule),
/* harmony export */   assertModuleExport: () => (/* binding */ assertModuleExport),
/* harmony export */   assertModuleExportDescr: () => (/* binding */ assertModuleExportDescr),
/* harmony export */   assertModuleImport: () => (/* binding */ assertModuleImport),
/* harmony export */   assertModuleMetadata: () => (/* binding */ assertModuleMetadata),
/* harmony export */   assertModuleNameMetadata: () => (/* binding */ assertModuleNameMetadata),
/* harmony export */   assertNumberLiteral: () => (/* binding */ assertNumberLiteral),
/* harmony export */   assertProducerMetadata: () => (/* binding */ assertProducerMetadata),
/* harmony export */   assertProducerMetadataVersionedName: () => (/* binding */ assertProducerMetadataVersionedName),
/* harmony export */   assertProducersSectionMetadata: () => (/* binding */ assertProducersSectionMetadata),
/* harmony export */   assertProgram: () => (/* binding */ assertProgram),
/* harmony export */   assertQuoteModule: () => (/* binding */ assertQuoteModule),
/* harmony export */   assertSectionMetadata: () => (/* binding */ assertSectionMetadata),
/* harmony export */   assertSignature: () => (/* binding */ assertSignature),
/* harmony export */   assertStart: () => (/* binding */ assertStart),
/* harmony export */   assertStringLiteral: () => (/* binding */ assertStringLiteral),
/* harmony export */   assertTable: () => (/* binding */ assertTable),
/* harmony export */   assertTypeInstruction: () => (/* binding */ assertTypeInstruction),
/* harmony export */   assertValtypeLiteral: () => (/* binding */ assertValtypeLiteral),
/* harmony export */   binaryModule: () => (/* binding */ binaryModule),
/* harmony export */   blockComment: () => (/* binding */ blockComment),
/* harmony export */   blockInstruction: () => (/* binding */ blockInstruction),
/* harmony export */   byteArray: () => (/* binding */ byteArray),
/* harmony export */   callIndirectInstruction: () => (/* binding */ callIndirectInstruction),
/* harmony export */   callInstruction: () => (/* binding */ callInstruction),
/* harmony export */   data: () => (/* binding */ data),
/* harmony export */   elem: () => (/* binding */ elem),
/* harmony export */   floatLiteral: () => (/* binding */ floatLiteral),
/* harmony export */   func: () => (/* binding */ func),
/* harmony export */   funcImportDescr: () => (/* binding */ funcImportDescr),
/* harmony export */   functionNameMetadata: () => (/* binding */ functionNameMetadata),
/* harmony export */   global: () => (/* binding */ global),
/* harmony export */   globalType: () => (/* binding */ globalType),
/* harmony export */   identifier: () => (/* binding */ identifier),
/* harmony export */   ifInstruction: () => (/* binding */ ifInstruction),
/* harmony export */   indexInFuncSection: () => (/* binding */ indexInFuncSection),
/* harmony export */   instr: () => (/* binding */ instr),
/* harmony export */   internalBrUnless: () => (/* binding */ internalBrUnless),
/* harmony export */   internalCallExtern: () => (/* binding */ internalCallExtern),
/* harmony export */   internalEndAndReturn: () => (/* binding */ internalEndAndReturn),
/* harmony export */   internalGoto: () => (/* binding */ internalGoto),
/* harmony export */   isBinaryModule: () => (/* binding */ isBinaryModule),
/* harmony export */   isBlock: () => (/* binding */ isBlock),
/* harmony export */   isBlockComment: () => (/* binding */ isBlockComment),
/* harmony export */   isBlockInstruction: () => (/* binding */ isBlockInstruction),
/* harmony export */   isByteArray: () => (/* binding */ isByteArray),
/* harmony export */   isCallIndirectInstruction: () => (/* binding */ isCallIndirectInstruction),
/* harmony export */   isCallInstruction: () => (/* binding */ isCallInstruction),
/* harmony export */   isData: () => (/* binding */ isData),
/* harmony export */   isElem: () => (/* binding */ isElem),
/* harmony export */   isExpression: () => (/* binding */ isExpression),
/* harmony export */   isFloatLiteral: () => (/* binding */ isFloatLiteral),
/* harmony export */   isFunc: () => (/* binding */ isFunc),
/* harmony export */   isFuncImportDescr: () => (/* binding */ isFuncImportDescr),
/* harmony export */   isFunctionNameMetadata: () => (/* binding */ isFunctionNameMetadata),
/* harmony export */   isGlobal: () => (/* binding */ isGlobal),
/* harmony export */   isGlobalType: () => (/* binding */ isGlobalType),
/* harmony export */   isIdentifier: () => (/* binding */ isIdentifier),
/* harmony export */   isIfInstruction: () => (/* binding */ isIfInstruction),
/* harmony export */   isImportDescr: () => (/* binding */ isImportDescr),
/* harmony export */   isIndexInFuncSection: () => (/* binding */ isIndexInFuncSection),
/* harmony export */   isInstr: () => (/* binding */ isInstr),
/* harmony export */   isInstruction: () => (/* binding */ isInstruction),
/* harmony export */   isInternalBrUnless: () => (/* binding */ isInternalBrUnless),
/* harmony export */   isInternalCallExtern: () => (/* binding */ isInternalCallExtern),
/* harmony export */   isInternalEndAndReturn: () => (/* binding */ isInternalEndAndReturn),
/* harmony export */   isInternalGoto: () => (/* binding */ isInternalGoto),
/* harmony export */   isIntrinsic: () => (/* binding */ isIntrinsic),
/* harmony export */   isLeadingComment: () => (/* binding */ isLeadingComment),
/* harmony export */   isLimit: () => (/* binding */ isLimit),
/* harmony export */   isLocalNameMetadata: () => (/* binding */ isLocalNameMetadata),
/* harmony export */   isLongNumberLiteral: () => (/* binding */ isLongNumberLiteral),
/* harmony export */   isLoopInstruction: () => (/* binding */ isLoopInstruction),
/* harmony export */   isMemory: () => (/* binding */ isMemory),
/* harmony export */   isModule: () => (/* binding */ isModule),
/* harmony export */   isModuleExport: () => (/* binding */ isModuleExport),
/* harmony export */   isModuleExportDescr: () => (/* binding */ isModuleExportDescr),
/* harmony export */   isModuleImport: () => (/* binding */ isModuleImport),
/* harmony export */   isModuleMetadata: () => (/* binding */ isModuleMetadata),
/* harmony export */   isModuleNameMetadata: () => (/* binding */ isModuleNameMetadata),
/* harmony export */   isNode: () => (/* binding */ isNode),
/* harmony export */   isNumberLiteral: () => (/* binding */ isNumberLiteral),
/* harmony export */   isNumericLiteral: () => (/* binding */ isNumericLiteral),
/* harmony export */   isProducerMetadata: () => (/* binding */ isProducerMetadata),
/* harmony export */   isProducerMetadataVersionedName: () => (/* binding */ isProducerMetadataVersionedName),
/* harmony export */   isProducersSectionMetadata: () => (/* binding */ isProducersSectionMetadata),
/* harmony export */   isProgram: () => (/* binding */ isProgram),
/* harmony export */   isQuoteModule: () => (/* binding */ isQuoteModule),
/* harmony export */   isSectionMetadata: () => (/* binding */ isSectionMetadata),
/* harmony export */   isSignature: () => (/* binding */ isSignature),
/* harmony export */   isStart: () => (/* binding */ isStart),
/* harmony export */   isStringLiteral: () => (/* binding */ isStringLiteral),
/* harmony export */   isTable: () => (/* binding */ isTable),
/* harmony export */   isTypeInstruction: () => (/* binding */ isTypeInstruction),
/* harmony export */   isValtypeLiteral: () => (/* binding */ isValtypeLiteral),
/* harmony export */   leadingComment: () => (/* binding */ leadingComment),
/* harmony export */   limit: () => (/* binding */ limit),
/* harmony export */   localNameMetadata: () => (/* binding */ localNameMetadata),
/* harmony export */   longNumberLiteral: () => (/* binding */ longNumberLiteral),
/* harmony export */   loopInstruction: () => (/* binding */ loopInstruction),
/* harmony export */   memory: () => (/* binding */ memory),
/* harmony export */   module: () => (/* binding */ module),
/* harmony export */   moduleExport: () => (/* binding */ moduleExport),
/* harmony export */   moduleExportDescr: () => (/* binding */ moduleExportDescr),
/* harmony export */   moduleImport: () => (/* binding */ moduleImport),
/* harmony export */   moduleMetadata: () => (/* binding */ moduleMetadata),
/* harmony export */   moduleNameMetadata: () => (/* binding */ moduleNameMetadata),
/* harmony export */   nodeAndUnionTypes: () => (/* binding */ nodeAndUnionTypes),
/* harmony export */   numberLiteral: () => (/* binding */ numberLiteral),
/* harmony export */   producerMetadata: () => (/* binding */ producerMetadata),
/* harmony export */   producerMetadataVersionedName: () => (/* binding */ producerMetadataVersionedName),
/* harmony export */   producersSectionMetadata: () => (/* binding */ producersSectionMetadata),
/* harmony export */   program: () => (/* binding */ program),
/* harmony export */   quoteModule: () => (/* binding */ quoteModule),
/* harmony export */   sectionMetadata: () => (/* binding */ sectionMetadata),
/* harmony export */   signature: () => (/* binding */ signature),
/* harmony export */   start: () => (/* binding */ start),
/* harmony export */   stringLiteral: () => (/* binding */ stringLiteral),
/* harmony export */   table: () => (/* binding */ table),
/* harmony export */   typeInstruction: () => (/* binding */ typeInstruction),
/* harmony export */   unionTypesMap: () => (/* binding */ unionTypesMap),
/* harmony export */   valtypeLiteral: () => (/* binding */ valtypeLiteral)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// THIS FILE IS AUTOGENERATED
// see scripts/generateNodeUtils.js
function isTypeOf(t) {
  return function (n) {
    return n.type === t;
  };
}

function assertTypeOf(t) {
  return function (n) {
    return function () {
      if (!(n.type === t)) {
        throw new Error('n.type === t' + " error: " + ( false || "unknown"));
      }
    }();
  };
}

function module(id, fields, metadata) {
  if (id !== null && id !== undefined) {
    if (!(typeof id === "string")) {
      throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || 0));
    }
  }

  if (!(_typeof(fields) === "object" && typeof fields.length !== "undefined")) {
    throw new Error('typeof fields === "object" && typeof fields.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "Module",
    id: id,
    fields: fields
  };

  if (typeof metadata !== "undefined") {
    node.metadata = metadata;
  }

  return node;
}
function moduleMetadata(sections, functionNames, localNames, producers) {
  if (!(_typeof(sections) === "object" && typeof sections.length !== "undefined")) {
    throw new Error('typeof sections === "object" && typeof sections.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  if (functionNames !== null && functionNames !== undefined) {
    if (!(_typeof(functionNames) === "object" && typeof functionNames.length !== "undefined")) {
      throw new Error('typeof functionNames === "object" && typeof functionNames.length !== "undefined"' + " error: " + ( false || "unknown"));
    }
  }

  if (localNames !== null && localNames !== undefined) {
    if (!(_typeof(localNames) === "object" && typeof localNames.length !== "undefined")) {
      throw new Error('typeof localNames === "object" && typeof localNames.length !== "undefined"' + " error: " + ( false || "unknown"));
    }
  }

  if (producers !== null && producers !== undefined) {
    if (!(_typeof(producers) === "object" && typeof producers.length !== "undefined")) {
      throw new Error('typeof producers === "object" && typeof producers.length !== "undefined"' + " error: " + ( false || "unknown"));
    }
  }

  var node = {
    type: "ModuleMetadata",
    sections: sections
  };

  if (typeof functionNames !== "undefined" && functionNames.length > 0) {
    node.functionNames = functionNames;
  }

  if (typeof localNames !== "undefined" && localNames.length > 0) {
    node.localNames = localNames;
  }

  if (typeof producers !== "undefined" && producers.length > 0) {
    node.producers = producers;
  }

  return node;
}
function moduleNameMetadata(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  var node = {
    type: "ModuleNameMetadata",
    value: value
  };
  return node;
}
function functionNameMetadata(value, index) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  if (!(typeof index === "number")) {
    throw new Error('typeof index === "number"' + " error: " + ("Argument index must be of type number, given: " + _typeof(index) || 0));
  }

  var node = {
    type: "FunctionNameMetadata",
    value: value,
    index: index
  };
  return node;
}
function localNameMetadata(value, localIndex, functionIndex) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  if (!(typeof localIndex === "number")) {
    throw new Error('typeof localIndex === "number"' + " error: " + ("Argument localIndex must be of type number, given: " + _typeof(localIndex) || 0));
  }

  if (!(typeof functionIndex === "number")) {
    throw new Error('typeof functionIndex === "number"' + " error: " + ("Argument functionIndex must be of type number, given: " + _typeof(functionIndex) || 0));
  }

  var node = {
    type: "LocalNameMetadata",
    value: value,
    localIndex: localIndex,
    functionIndex: functionIndex
  };
  return node;
}
function binaryModule(id, blob) {
  if (id !== null && id !== undefined) {
    if (!(typeof id === "string")) {
      throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || 0));
    }
  }

  if (!(_typeof(blob) === "object" && typeof blob.length !== "undefined")) {
    throw new Error('typeof blob === "object" && typeof blob.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "BinaryModule",
    id: id,
    blob: blob
  };
  return node;
}
function quoteModule(id, string) {
  if (id !== null && id !== undefined) {
    if (!(typeof id === "string")) {
      throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || 0));
    }
  }

  if (!(_typeof(string) === "object" && typeof string.length !== "undefined")) {
    throw new Error('typeof string === "object" && typeof string.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "QuoteModule",
    id: id,
    string: string
  };
  return node;
}
function sectionMetadata(section, startOffset, size, vectorOfSize) {
  if (!(typeof startOffset === "number")) {
    throw new Error('typeof startOffset === "number"' + " error: " + ("Argument startOffset must be of type number, given: " + _typeof(startOffset) || 0));
  }

  var node = {
    type: "SectionMetadata",
    section: section,
    startOffset: startOffset,
    size: size,
    vectorOfSize: vectorOfSize
  };
  return node;
}
function producersSectionMetadata(producers) {
  if (!(_typeof(producers) === "object" && typeof producers.length !== "undefined")) {
    throw new Error('typeof producers === "object" && typeof producers.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "ProducersSectionMetadata",
    producers: producers
  };
  return node;
}
function producerMetadata(language, processedBy, sdk) {
  if (!(_typeof(language) === "object" && typeof language.length !== "undefined")) {
    throw new Error('typeof language === "object" && typeof language.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  if (!(_typeof(processedBy) === "object" && typeof processedBy.length !== "undefined")) {
    throw new Error('typeof processedBy === "object" && typeof processedBy.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  if (!(_typeof(sdk) === "object" && typeof sdk.length !== "undefined")) {
    throw new Error('typeof sdk === "object" && typeof sdk.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "ProducerMetadata",
    language: language,
    processedBy: processedBy,
    sdk: sdk
  };
  return node;
}
function producerMetadataVersionedName(name, version) {
  if (!(typeof name === "string")) {
    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || 0));
  }

  if (!(typeof version === "string")) {
    throw new Error('typeof version === "string"' + " error: " + ("Argument version must be of type string, given: " + _typeof(version) || 0));
  }

  var node = {
    type: "ProducerMetadataVersionedName",
    name: name,
    version: version
  };
  return node;
}
function loopInstruction(label, resulttype, instr) {
  if (!(_typeof(instr) === "object" && typeof instr.length !== "undefined")) {
    throw new Error('typeof instr === "object" && typeof instr.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "LoopInstruction",
    id: "loop",
    label: label,
    resulttype: resulttype,
    instr: instr
  };
  return node;
}
function instr(id, object, args, namedArgs) {
  if (!(typeof id === "string")) {
    throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || 0));
  }

  if (!(_typeof(args) === "object" && typeof args.length !== "undefined")) {
    throw new Error('typeof args === "object" && typeof args.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "Instr",
    id: id,
    args: args
  };

  if (typeof object !== "undefined") {
    node.object = object;
  }

  if (typeof namedArgs !== "undefined" && Object.keys(namedArgs).length !== 0) {
    node.namedArgs = namedArgs;
  }

  return node;
}
function ifInstruction(testLabel, test, result, consequent, alternate) {
  if (!(_typeof(test) === "object" && typeof test.length !== "undefined")) {
    throw new Error('typeof test === "object" && typeof test.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  if (!(_typeof(consequent) === "object" && typeof consequent.length !== "undefined")) {
    throw new Error('typeof consequent === "object" && typeof consequent.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  if (!(_typeof(alternate) === "object" && typeof alternate.length !== "undefined")) {
    throw new Error('typeof alternate === "object" && typeof alternate.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "IfInstruction",
    id: "if",
    testLabel: testLabel,
    test: test,
    result: result,
    consequent: consequent,
    alternate: alternate
  };
  return node;
}
function stringLiteral(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  var node = {
    type: "StringLiteral",
    value: value
  };
  return node;
}
function numberLiteral(value, raw) {
  if (!(typeof value === "number")) {
    throw new Error('typeof value === "number"' + " error: " + ("Argument value must be of type number, given: " + _typeof(value) || 0));
  }

  if (!(typeof raw === "string")) {
    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || 0));
  }

  var node = {
    type: "NumberLiteral",
    value: value,
    raw: raw
  };
  return node;
}
function longNumberLiteral(value, raw) {
  if (!(typeof raw === "string")) {
    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || 0));
  }

  var node = {
    type: "LongNumberLiteral",
    value: value,
    raw: raw
  };
  return node;
}
function floatLiteral(value, nan, inf, raw) {
  if (!(typeof value === "number")) {
    throw new Error('typeof value === "number"' + " error: " + ("Argument value must be of type number, given: " + _typeof(value) || 0));
  }

  if (nan !== null && nan !== undefined) {
    if (!(typeof nan === "boolean")) {
      throw new Error('typeof nan === "boolean"' + " error: " + ("Argument nan must be of type boolean, given: " + _typeof(nan) || 0));
    }
  }

  if (inf !== null && inf !== undefined) {
    if (!(typeof inf === "boolean")) {
      throw new Error('typeof inf === "boolean"' + " error: " + ("Argument inf must be of type boolean, given: " + _typeof(inf) || 0));
    }
  }

  if (!(typeof raw === "string")) {
    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || 0));
  }

  var node = {
    type: "FloatLiteral",
    value: value,
    raw: raw
  };

  if (nan === true) {
    node.nan = true;
  }

  if (inf === true) {
    node.inf = true;
  }

  return node;
}
function elem(table, offset, funcs) {
  if (!(_typeof(offset) === "object" && typeof offset.length !== "undefined")) {
    throw new Error('typeof offset === "object" && typeof offset.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  if (!(_typeof(funcs) === "object" && typeof funcs.length !== "undefined")) {
    throw new Error('typeof funcs === "object" && typeof funcs.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "Elem",
    table: table,
    offset: offset,
    funcs: funcs
  };
  return node;
}
function indexInFuncSection(index) {
  var node = {
    type: "IndexInFuncSection",
    index: index
  };
  return node;
}
function valtypeLiteral(name) {
  var node = {
    type: "ValtypeLiteral",
    name: name
  };
  return node;
}
function typeInstruction(id, functype) {
  var node = {
    type: "TypeInstruction",
    id: id,
    functype: functype
  };
  return node;
}
function start(index) {
  var node = {
    type: "Start",
    index: index
  };
  return node;
}
function globalType(valtype, mutability) {
  var node = {
    type: "GlobalType",
    valtype: valtype,
    mutability: mutability
  };
  return node;
}
function leadingComment(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  var node = {
    type: "LeadingComment",
    value: value
  };
  return node;
}
function blockComment(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  var node = {
    type: "BlockComment",
    value: value
  };
  return node;
}
function data(memoryIndex, offset, init) {
  var node = {
    type: "Data",
    memoryIndex: memoryIndex,
    offset: offset,
    init: init
  };
  return node;
}
function global(globalType, init, name) {
  if (!(_typeof(init) === "object" && typeof init.length !== "undefined")) {
    throw new Error('typeof init === "object" && typeof init.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "Global",
    globalType: globalType,
    init: init,
    name: name
  };
  return node;
}
function table(elementType, limits, name, elements) {
  if (!(limits.type === "Limit")) {
    throw new Error('limits.type === "Limit"' + " error: " + ("Argument limits must be of type Limit, given: " + limits.type || 0));
  }

  if (elements !== null && elements !== undefined) {
    if (!(_typeof(elements) === "object" && typeof elements.length !== "undefined")) {
      throw new Error('typeof elements === "object" && typeof elements.length !== "undefined"' + " error: " + ( false || "unknown"));
    }
  }

  var node = {
    type: "Table",
    elementType: elementType,
    limits: limits,
    name: name
  };

  if (typeof elements !== "undefined" && elements.length > 0) {
    node.elements = elements;
  }

  return node;
}
function memory(limits, id) {
  var node = {
    type: "Memory",
    limits: limits,
    id: id
  };
  return node;
}
function funcImportDescr(id, signature) {
  var node = {
    type: "FuncImportDescr",
    id: id,
    signature: signature
  };
  return node;
}
function moduleImport(module, name, descr) {
  if (!(typeof module === "string")) {
    throw new Error('typeof module === "string"' + " error: " + ("Argument module must be of type string, given: " + _typeof(module) || 0));
  }

  if (!(typeof name === "string")) {
    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || 0));
  }

  var node = {
    type: "ModuleImport",
    module: module,
    name: name,
    descr: descr
  };
  return node;
}
function moduleExportDescr(exportType, id) {
  var node = {
    type: "ModuleExportDescr",
    exportType: exportType,
    id: id
  };
  return node;
}
function moduleExport(name, descr) {
  if (!(typeof name === "string")) {
    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || 0));
  }

  var node = {
    type: "ModuleExport",
    name: name,
    descr: descr
  };
  return node;
}
function limit(min, max, shared) {
  if (!(typeof min === "number")) {
    throw new Error('typeof min === "number"' + " error: " + ("Argument min must be of type number, given: " + _typeof(min) || 0));
  }

  if (max !== null && max !== undefined) {
    if (!(typeof max === "number")) {
      throw new Error('typeof max === "number"' + " error: " + ("Argument max must be of type number, given: " + _typeof(max) || 0));
    }
  }

  if (shared !== null && shared !== undefined) {
    if (!(typeof shared === "boolean")) {
      throw new Error('typeof shared === "boolean"' + " error: " + ("Argument shared must be of type boolean, given: " + _typeof(shared) || 0));
    }
  }

  var node = {
    type: "Limit",
    min: min
  };

  if (typeof max !== "undefined") {
    node.max = max;
  }

  if (shared === true) {
    node.shared = true;
  }

  return node;
}
function signature(params, results) {
  if (!(_typeof(params) === "object" && typeof params.length !== "undefined")) {
    throw new Error('typeof params === "object" && typeof params.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  if (!(_typeof(results) === "object" && typeof results.length !== "undefined")) {
    throw new Error('typeof results === "object" && typeof results.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "Signature",
    params: params,
    results: results
  };
  return node;
}
function program(body) {
  if (!(_typeof(body) === "object" && typeof body.length !== "undefined")) {
    throw new Error('typeof body === "object" && typeof body.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "Program",
    body: body
  };
  return node;
}
function identifier(value, raw) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  if (raw !== null && raw !== undefined) {
    if (!(typeof raw === "string")) {
      throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || 0));
    }
  }

  var node = {
    type: "Identifier",
    value: value
  };

  if (typeof raw !== "undefined") {
    node.raw = raw;
  }

  return node;
}
function blockInstruction(label, instr, result) {
  if (!(_typeof(instr) === "object" && typeof instr.length !== "undefined")) {
    throw new Error('typeof instr === "object" && typeof instr.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "BlockInstruction",
    id: "block",
    label: label,
    instr: instr,
    result: result
  };
  return node;
}
function callInstruction(index, instrArgs, numeric) {
  if (instrArgs !== null && instrArgs !== undefined) {
    if (!(_typeof(instrArgs) === "object" && typeof instrArgs.length !== "undefined")) {
      throw new Error('typeof instrArgs === "object" && typeof instrArgs.length !== "undefined"' + " error: " + ( false || "unknown"));
    }
  }

  var node = {
    type: "CallInstruction",
    id: "call",
    index: index
  };

  if (typeof instrArgs !== "undefined" && instrArgs.length > 0) {
    node.instrArgs = instrArgs;
  }

  if (typeof numeric !== "undefined") {
    node.numeric = numeric;
  }

  return node;
}
function callIndirectInstruction(signature, intrs) {
  if (intrs !== null && intrs !== undefined) {
    if (!(_typeof(intrs) === "object" && typeof intrs.length !== "undefined")) {
      throw new Error('typeof intrs === "object" && typeof intrs.length !== "undefined"' + " error: " + ( false || "unknown"));
    }
  }

  var node = {
    type: "CallIndirectInstruction",
    id: "call_indirect",
    signature: signature
  };

  if (typeof intrs !== "undefined" && intrs.length > 0) {
    node.intrs = intrs;
  }

  return node;
}
function byteArray(values) {
  if (!(_typeof(values) === "object" && typeof values.length !== "undefined")) {
    throw new Error('typeof values === "object" && typeof values.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  var node = {
    type: "ByteArray",
    values: values
  };
  return node;
}
function func(name, signature, body, isExternal, metadata) {
  if (!(_typeof(body) === "object" && typeof body.length !== "undefined")) {
    throw new Error('typeof body === "object" && typeof body.length !== "undefined"' + " error: " + ( false || "unknown"));
  }

  if (isExternal !== null && isExternal !== undefined) {
    if (!(typeof isExternal === "boolean")) {
      throw new Error('typeof isExternal === "boolean"' + " error: " + ("Argument isExternal must be of type boolean, given: " + _typeof(isExternal) || 0));
    }
  }

  var node = {
    type: "Func",
    name: name,
    signature: signature,
    body: body
  };

  if (isExternal === true) {
    node.isExternal = true;
  }

  if (typeof metadata !== "undefined") {
    node.metadata = metadata;
  }

  return node;
}
function internalBrUnless(target) {
  if (!(typeof target === "number")) {
    throw new Error('typeof target === "number"' + " error: " + ("Argument target must be of type number, given: " + _typeof(target) || 0));
  }

  var node = {
    type: "InternalBrUnless",
    target: target
  };
  return node;
}
function internalGoto(target) {
  if (!(typeof target === "number")) {
    throw new Error('typeof target === "number"' + " error: " + ("Argument target must be of type number, given: " + _typeof(target) || 0));
  }

  var node = {
    type: "InternalGoto",
    target: target
  };
  return node;
}
function internalCallExtern(target) {
  if (!(typeof target === "number")) {
    throw new Error('typeof target === "number"' + " error: " + ("Argument target must be of type number, given: " + _typeof(target) || 0));
  }

  var node = {
    type: "InternalCallExtern",
    target: target
  };
  return node;
}
function internalEndAndReturn() {
  var node = {
    type: "InternalEndAndReturn"
  };
  return node;
}
var isModule = isTypeOf("Module");
var isModuleMetadata = isTypeOf("ModuleMetadata");
var isModuleNameMetadata = isTypeOf("ModuleNameMetadata");
var isFunctionNameMetadata = isTypeOf("FunctionNameMetadata");
var isLocalNameMetadata = isTypeOf("LocalNameMetadata");
var isBinaryModule = isTypeOf("BinaryModule");
var isQuoteModule = isTypeOf("QuoteModule");
var isSectionMetadata = isTypeOf("SectionMetadata");
var isProducersSectionMetadata = isTypeOf("ProducersSectionMetadata");
var isProducerMetadata = isTypeOf("ProducerMetadata");
var isProducerMetadataVersionedName = isTypeOf("ProducerMetadataVersionedName");
var isLoopInstruction = isTypeOf("LoopInstruction");
var isInstr = isTypeOf("Instr");
var isIfInstruction = isTypeOf("IfInstruction");
var isStringLiteral = isTypeOf("StringLiteral");
var isNumberLiteral = isTypeOf("NumberLiteral");
var isLongNumberLiteral = isTypeOf("LongNumberLiteral");
var isFloatLiteral = isTypeOf("FloatLiteral");
var isElem = isTypeOf("Elem");
var isIndexInFuncSection = isTypeOf("IndexInFuncSection");
var isValtypeLiteral = isTypeOf("ValtypeLiteral");
var isTypeInstruction = isTypeOf("TypeInstruction");
var isStart = isTypeOf("Start");
var isGlobalType = isTypeOf("GlobalType");
var isLeadingComment = isTypeOf("LeadingComment");
var isBlockComment = isTypeOf("BlockComment");
var isData = isTypeOf("Data");
var isGlobal = isTypeOf("Global");
var isTable = isTypeOf("Table");
var isMemory = isTypeOf("Memory");
var isFuncImportDescr = isTypeOf("FuncImportDescr");
var isModuleImport = isTypeOf("ModuleImport");
var isModuleExportDescr = isTypeOf("ModuleExportDescr");
var isModuleExport = isTypeOf("ModuleExport");
var isLimit = isTypeOf("Limit");
var isSignature = isTypeOf("Signature");
var isProgram = isTypeOf("Program");
var isIdentifier = isTypeOf("Identifier");
var isBlockInstruction = isTypeOf("BlockInstruction");
var isCallInstruction = isTypeOf("CallInstruction");
var isCallIndirectInstruction = isTypeOf("CallIndirectInstruction");
var isByteArray = isTypeOf("ByteArray");
var isFunc = isTypeOf("Func");
var isInternalBrUnless = isTypeOf("InternalBrUnless");
var isInternalGoto = isTypeOf("InternalGoto");
var isInternalCallExtern = isTypeOf("InternalCallExtern");
var isInternalEndAndReturn = isTypeOf("InternalEndAndReturn");
var isNode = function isNode(node) {
  return isModule(node) || isModuleMetadata(node) || isModuleNameMetadata(node) || isFunctionNameMetadata(node) || isLocalNameMetadata(node) || isBinaryModule(node) || isQuoteModule(node) || isSectionMetadata(node) || isProducersSectionMetadata(node) || isProducerMetadata(node) || isProducerMetadataVersionedName(node) || isLoopInstruction(node) || isInstr(node) || isIfInstruction(node) || isStringLiteral(node) || isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node) || isElem(node) || isIndexInFuncSection(node) || isValtypeLiteral(node) || isTypeInstruction(node) || isStart(node) || isGlobalType(node) || isLeadingComment(node) || isBlockComment(node) || isData(node) || isGlobal(node) || isTable(node) || isMemory(node) || isFuncImportDescr(node) || isModuleImport(node) || isModuleExportDescr(node) || isModuleExport(node) || isLimit(node) || isSignature(node) || isProgram(node) || isIdentifier(node) || isBlockInstruction(node) || isCallInstruction(node) || isCallIndirectInstruction(node) || isByteArray(node) || isFunc(node) || isInternalBrUnless(node) || isInternalGoto(node) || isInternalCallExtern(node) || isInternalEndAndReturn(node);
};
var isBlock = function isBlock(node) {
  return isLoopInstruction(node) || isBlockInstruction(node) || isFunc(node);
};
var isInstruction = function isInstruction(node) {
  return isLoopInstruction(node) || isInstr(node) || isIfInstruction(node) || isTypeInstruction(node) || isBlockInstruction(node) || isCallInstruction(node) || isCallIndirectInstruction(node);
};
var isExpression = function isExpression(node) {
  return isInstr(node) || isStringLiteral(node) || isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node) || isValtypeLiteral(node) || isIdentifier(node);
};
var isNumericLiteral = function isNumericLiteral(node) {
  return isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node);
};
var isImportDescr = function isImportDescr(node) {
  return isGlobalType(node) || isTable(node) || isMemory(node) || isFuncImportDescr(node);
};
var isIntrinsic = function isIntrinsic(node) {
  return isInternalBrUnless(node) || isInternalGoto(node) || isInternalCallExtern(node) || isInternalEndAndReturn(node);
};
var assertModule = assertTypeOf("Module");
var assertModuleMetadata = assertTypeOf("ModuleMetadata");
var assertModuleNameMetadata = assertTypeOf("ModuleNameMetadata");
var assertFunctionNameMetadata = assertTypeOf("FunctionNameMetadata");
var assertLocalNameMetadata = assertTypeOf("LocalNameMetadata");
var assertBinaryModule = assertTypeOf("BinaryModule");
var assertQuoteModule = assertTypeOf("QuoteModule");
var assertSectionMetadata = assertTypeOf("SectionMetadata");
var assertProducersSectionMetadata = assertTypeOf("ProducersSectionMetadata");
var assertProducerMetadata = assertTypeOf("ProducerMetadata");
var assertProducerMetadataVersionedName = assertTypeOf("ProducerMetadataVersionedName");
var assertLoopInstruction = assertTypeOf("LoopInstruction");
var assertInstr = assertTypeOf("Instr");
var assertIfInstruction = assertTypeOf("IfInstruction");
var assertStringLiteral = assertTypeOf("StringLiteral");
var assertNumberLiteral = assertTypeOf("NumberLiteral");
var assertLongNumberLiteral = assertTypeOf("LongNumberLiteral");
var assertFloatLiteral = assertTypeOf("FloatLiteral");
var assertElem = assertTypeOf("Elem");
var assertIndexInFuncSection = assertTypeOf("IndexInFuncSection");
var assertValtypeLiteral = assertTypeOf("ValtypeLiteral");
var assertTypeInstruction = assertTypeOf("TypeInstruction");
var assertStart = assertTypeOf("Start");
var assertGlobalType = assertTypeOf("GlobalType");
var assertLeadingComment = assertTypeOf("LeadingComment");
var assertBlockComment = assertTypeOf("BlockComment");
var assertData = assertTypeOf("Data");
var assertGlobal = assertTypeOf("Global");
var assertTable = assertTypeOf("Table");
var assertMemory = assertTypeOf("Memory");
var assertFuncImportDescr = assertTypeOf("FuncImportDescr");
var assertModuleImport = assertTypeOf("ModuleImport");
var assertModuleExportDescr = assertTypeOf("ModuleExportDescr");
var assertModuleExport = assertTypeOf("ModuleExport");
var assertLimit = assertTypeOf("Limit");
var assertSignature = assertTypeOf("Signature");
var assertProgram = assertTypeOf("Program");
var assertIdentifier = assertTypeOf("Identifier");
var assertBlockInstruction = assertTypeOf("BlockInstruction");
var assertCallInstruction = assertTypeOf("CallInstruction");
var assertCallIndirectInstruction = assertTypeOf("CallIndirectInstruction");
var assertByteArray = assertTypeOf("ByteArray");
var assertFunc = assertTypeOf("Func");
var assertInternalBrUnless = assertTypeOf("InternalBrUnless");
var assertInternalGoto = assertTypeOf("InternalGoto");
var assertInternalCallExtern = assertTypeOf("InternalCallExtern");
var assertInternalEndAndReturn = assertTypeOf("InternalEndAndReturn");
var unionTypesMap = {
  Module: ["Node"],
  ModuleMetadata: ["Node"],
  ModuleNameMetadata: ["Node"],
  FunctionNameMetadata: ["Node"],
  LocalNameMetadata: ["Node"],
  BinaryModule: ["Node"],
  QuoteModule: ["Node"],
  SectionMetadata: ["Node"],
  ProducersSectionMetadata: ["Node"],
  ProducerMetadata: ["Node"],
  ProducerMetadataVersionedName: ["Node"],
  LoopInstruction: ["Node", "Block", "Instruction"],
  Instr: ["Node", "Expression", "Instruction"],
  IfInstruction: ["Node", "Instruction"],
  StringLiteral: ["Node", "Expression"],
  NumberLiteral: ["Node", "NumericLiteral", "Expression"],
  LongNumberLiteral: ["Node", "NumericLiteral", "Expression"],
  FloatLiteral: ["Node", "NumericLiteral", "Expression"],
  Elem: ["Node"],
  IndexInFuncSection: ["Node"],
  ValtypeLiteral: ["Node", "Expression"],
  TypeInstruction: ["Node", "Instruction"],
  Start: ["Node"],
  GlobalType: ["Node", "ImportDescr"],
  LeadingComment: ["Node"],
  BlockComment: ["Node"],
  Data: ["Node"],
  Global: ["Node"],
  Table: ["Node", "ImportDescr"],
  Memory: ["Node", "ImportDescr"],
  FuncImportDescr: ["Node", "ImportDescr"],
  ModuleImport: ["Node"],
  ModuleExportDescr: ["Node"],
  ModuleExport: ["Node"],
  Limit: ["Node"],
  Signature: ["Node"],
  Program: ["Node"],
  Identifier: ["Node", "Expression"],
  BlockInstruction: ["Node", "Block", "Instruction"],
  CallInstruction: ["Node", "Instruction"],
  CallIndirectInstruction: ["Node", "Instruction"],
  ByteArray: ["Node"],
  Func: ["Node", "Block"],
  InternalBrUnless: ["Node", "Intrinsic"],
  InternalGoto: ["Node", "Intrinsic"],
  InternalCallExtern: ["Node", "Intrinsic"],
  InternalEndAndReturn: ["Node", "Intrinsic"]
};
var nodeAndUnionTypes = ["Module", "ModuleMetadata", "ModuleNameMetadata", "FunctionNameMetadata", "LocalNameMetadata", "BinaryModule", "QuoteModule", "SectionMetadata", "ProducersSectionMetadata", "ProducerMetadata", "ProducerMetadataVersionedName", "LoopInstruction", "Instr", "IfInstruction", "StringLiteral", "NumberLiteral", "LongNumberLiteral", "FloatLiteral", "Elem", "IndexInFuncSection", "ValtypeLiteral", "TypeInstruction", "Start", "GlobalType", "LeadingComment", "BlockComment", "Data", "Global", "Table", "Memory", "FuncImportDescr", "ModuleImport", "ModuleExportDescr", "ModuleExport", "Limit", "Signature", "Program", "Identifier", "BlockInstruction", "CallInstruction", "CallIndirectInstruction", "ByteArray", "Func", "InternalBrUnless", "InternalGoto", "InternalCallExtern", "InternalEndAndReturn", "Node", "Block", "Instruction", "Expression", "NumericLiteral", "ImportDescr", "Intrinsic"];

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/signatures.js":
/*!***********************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/signatures.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   signatures: () => (/* binding */ signatures)
/* harmony export */ });
function sign(input, output) {
  return [input, output];
}

var u32 = "u32";
var i32 = "i32";
var i64 = "i64";
var f32 = "f32";
var f64 = "f64";

var vector = function vector(t) {
  var vecType = [t]; // $FlowIgnore

  vecType.vector = true;
  return vecType;
};

var controlInstructions = {
  unreachable: sign([], []),
  nop: sign([], []),
  // block ?
  // loop ?
  // if ?
  // if else ?
  br: sign([u32], []),
  br_if: sign([u32], []),
  br_table: sign(vector(u32), []),
  "return": sign([], []),
  call: sign([u32], []),
  call_indirect: sign([u32], [])
};
var parametricInstructions = {
  drop: sign([], []),
  select: sign([], [])
};
var variableInstructions = {
  get_local: sign([u32], []),
  set_local: sign([u32], []),
  tee_local: sign([u32], []),
  get_global: sign([u32], []),
  set_global: sign([u32], [])
};
var memoryInstructions = {
  "i32.load": sign([u32, u32], [i32]),
  "i64.load": sign([u32, u32], []),
  "f32.load": sign([u32, u32], []),
  "f64.load": sign([u32, u32], []),
  "i32.load8_s": sign([u32, u32], [i32]),
  "i32.load8_u": sign([u32, u32], [i32]),
  "i32.load16_s": sign([u32, u32], [i32]),
  "i32.load16_u": sign([u32, u32], [i32]),
  "i64.load8_s": sign([u32, u32], [i64]),
  "i64.load8_u": sign([u32, u32], [i64]),
  "i64.load16_s": sign([u32, u32], [i64]),
  "i64.load16_u": sign([u32, u32], [i64]),
  "i64.load32_s": sign([u32, u32], [i64]),
  "i64.load32_u": sign([u32, u32], [i64]),
  "i32.store": sign([u32, u32], []),
  "i64.store": sign([u32, u32], []),
  "f32.store": sign([u32, u32], []),
  "f64.store": sign([u32, u32], []),
  "i32.store8": sign([u32, u32], []),
  "i32.store16": sign([u32, u32], []),
  "i64.store8": sign([u32, u32], []),
  "i64.store16": sign([u32, u32], []),
  "i64.store32": sign([u32, u32], []),
  current_memory: sign([], []),
  grow_memory: sign([], [])
};
var numericInstructions = {
  "i32.const": sign([i32], [i32]),
  "i64.const": sign([i64], [i64]),
  "f32.const": sign([f32], [f32]),
  "f64.const": sign([f64], [f64]),
  "i32.eqz": sign([i32], [i32]),
  "i32.eq": sign([i32, i32], [i32]),
  "i32.ne": sign([i32, i32], [i32]),
  "i32.lt_s": sign([i32, i32], [i32]),
  "i32.lt_u": sign([i32, i32], [i32]),
  "i32.gt_s": sign([i32, i32], [i32]),
  "i32.gt_u": sign([i32, i32], [i32]),
  "i32.le_s": sign([i32, i32], [i32]),
  "i32.le_u": sign([i32, i32], [i32]),
  "i32.ge_s": sign([i32, i32], [i32]),
  "i32.ge_u": sign([i32, i32], [i32]),
  "i64.eqz": sign([i64], [i64]),
  "i64.eq": sign([i64, i64], [i32]),
  "i64.ne": sign([i64, i64], [i32]),
  "i64.lt_s": sign([i64, i64], [i32]),
  "i64.lt_u": sign([i64, i64], [i32]),
  "i64.gt_s": sign([i64, i64], [i32]),
  "i64.gt_u": sign([i64, i64], [i32]),
  "i64.le_s": sign([i64, i64], [i32]),
  "i64.le_u": sign([i64, i64], [i32]),
  "i64.ge_s": sign([i64, i64], [i32]),
  "i64.ge_u": sign([i64, i64], [i32]),
  "f32.eq": sign([f32, f32], [i32]),
  "f32.ne": sign([f32, f32], [i32]),
  "f32.lt": sign([f32, f32], [i32]),
  "f32.gt": sign([f32, f32], [i32]),
  "f32.le": sign([f32, f32], [i32]),
  "f32.ge": sign([f32, f32], [i32]),
  "f64.eq": sign([f64, f64], [i32]),
  "f64.ne": sign([f64, f64], [i32]),
  "f64.lt": sign([f64, f64], [i32]),
  "f64.gt": sign([f64, f64], [i32]),
  "f64.le": sign([f64, f64], [i32]),
  "f64.ge": sign([f64, f64], [i32]),
  "i32.clz": sign([i32], [i32]),
  "i32.ctz": sign([i32], [i32]),
  "i32.popcnt": sign([i32], [i32]),
  "i32.add": sign([i32, i32], [i32]),
  "i32.sub": sign([i32, i32], [i32]),
  "i32.mul": sign([i32, i32], [i32]),
  "i32.div_s": sign([i32, i32], [i32]),
  "i32.div_u": sign([i32, i32], [i32]),
  "i32.rem_s": sign([i32, i32], [i32]),
  "i32.rem_u": sign([i32, i32], [i32]),
  "i32.and": sign([i32, i32], [i32]),
  "i32.or": sign([i32, i32], [i32]),
  "i32.xor": sign([i32, i32], [i32]),
  "i32.shl": sign([i32, i32], [i32]),
  "i32.shr_s": sign([i32, i32], [i32]),
  "i32.shr_u": sign([i32, i32], [i32]),
  "i32.rotl": sign([i32, i32], [i32]),
  "i32.rotr": sign([i32, i32], [i32]),
  "i64.clz": sign([i64], [i64]),
  "i64.ctz": sign([i64], [i64]),
  "i64.popcnt": sign([i64], [i64]),
  "i64.add": sign([i64, i64], [i64]),
  "i64.sub": sign([i64, i64], [i64]),
  "i64.mul": sign([i64, i64], [i64]),
  "i64.div_s": sign([i64, i64], [i64]),
  "i64.div_u": sign([i64, i64], [i64]),
  "i64.rem_s": sign([i64, i64], [i64]),
  "i64.rem_u": sign([i64, i64], [i64]),
  "i64.and": sign([i64, i64], [i64]),
  "i64.or": sign([i64, i64], [i64]),
  "i64.xor": sign([i64, i64], [i64]),
  "i64.shl": sign([i64, i64], [i64]),
  "i64.shr_s": sign([i64, i64], [i64]),
  "i64.shr_u": sign([i64, i64], [i64]),
  "i64.rotl": sign([i64, i64], [i64]),
  "i64.rotr": sign([i64, i64], [i64]),
  "f32.abs": sign([f32], [f32]),
  "f32.neg": sign([f32], [f32]),
  "f32.ceil": sign([f32], [f32]),
  "f32.floor": sign([f32], [f32]),
  "f32.trunc": sign([f32], [f32]),
  "f32.nearest": sign([f32], [f32]),
  "f32.sqrt": sign([f32], [f32]),
  "f32.add": sign([f32, f32], [f32]),
  "f32.sub": sign([f32, f32], [f32]),
  "f32.mul": sign([f32, f32], [f32]),
  "f32.div": sign([f32, f32], [f32]),
  "f32.min": sign([f32, f32], [f32]),
  "f32.max": sign([f32, f32], [f32]),
  "f32.copysign": sign([f32, f32], [f32]),
  "f64.abs": sign([f64], [f64]),
  "f64.neg": sign([f64], [f64]),
  "f64.ceil": sign([f64], [f64]),
  "f64.floor": sign([f64], [f64]),
  "f64.trunc": sign([f64], [f64]),
  "f64.nearest": sign([f64], [f64]),
  "f64.sqrt": sign([f64], [f64]),
  "f64.add": sign([f64, f64], [f64]),
  "f64.sub": sign([f64, f64], [f64]),
  "f64.mul": sign([f64, f64], [f64]),
  "f64.div": sign([f64, f64], [f64]),
  "f64.min": sign([f64, f64], [f64]),
  "f64.max": sign([f64, f64], [f64]),
  "f64.copysign": sign([f64, f64], [f64]),
  "i32.wrap/i64": sign([i64], [i32]),
  "i32.trunc_s/f32": sign([f32], [i32]),
  "i32.trunc_u/f32": sign([f32], [i32]),
  "i32.trunc_s/f64": sign([f32], [i32]),
  "i32.trunc_u/f64": sign([f64], [i32]),
  "i64.extend_s/i32": sign([i32], [i64]),
  "i64.extend_u/i32": sign([i32], [i64]),
  "i64.trunc_s/f32": sign([f32], [i64]),
  "i64.trunc_u/f32": sign([f32], [i64]),
  "i64.trunc_s/f64": sign([f64], [i64]),
  "i64.trunc_u/f64": sign([f64], [i64]),
  "f32.convert_s/i32": sign([i32], [f32]),
  "f32.convert_u/i32": sign([i32], [f32]),
  "f32.convert_s/i64": sign([i64], [f32]),
  "f32.convert_u/i64": sign([i64], [f32]),
  "f32.demote/f64": sign([f64], [f32]),
  "f64.convert_s/i32": sign([i32], [f64]),
  "f64.convert_u/i32": sign([i32], [f64]),
  "f64.convert_s/i64": sign([i64], [f64]),
  "f64.convert_u/i64": sign([i64], [f64]),
  "f64.promote/f32": sign([f32], [f64]),
  "i32.reinterpret/f32": sign([f32], [i32]),
  "i64.reinterpret/f64": sign([f64], [i64]),
  "f32.reinterpret/i32": sign([i32], [f32]),
  "f64.reinterpret/i64": sign([i64], [f64])
};
var signatures = Object.assign({}, controlInstructions, parametricInstructions, variableInstructions, memoryInstructions, numericInstructions);

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/transform/ast-module-to-module-context/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/transform/ast-module-to-module-context/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleContext: () => (/* binding */ ModuleContext),
/* harmony export */   moduleContextFromModuleAST: () => (/* binding */ moduleContextFromModuleAST)
/* harmony export */ });
/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nodes.js */ "./node_modules/@webassemblyjs/ast/esm/nodes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


function moduleContextFromModuleAST(m) {
  var moduleContext = new ModuleContext();

  if (!(m.type === "Module")) {
    throw new Error('m.type === "Module"' + " error: " + ( false || "unknown"));
  }

  m.fields.forEach(function (field) {
    switch (field.type) {
      case "Start":
        {
          moduleContext.setStart(field.index);
          break;
        }

      case "TypeInstruction":
        {
          moduleContext.addType(field);
          break;
        }

      case "Func":
        {
          moduleContext.addFunction(field);
          break;
        }

      case "Global":
        {
          moduleContext.defineGlobal(field);
          break;
        }

      case "ModuleImport":
        {
          switch (field.descr.type) {
            case "GlobalType":
              {
                moduleContext.importGlobal(field.descr.valtype, field.descr.mutability);
                break;
              }

            case "Memory":
              {
                moduleContext.addMemory(field.descr.limits.min, field.descr.limits.max);
                break;
              }

            case "FuncImportDescr":
              {
                moduleContext.importFunction(field.descr);
                break;
              }

            case "Table":
              {
                // FIXME(sven): not implemented yet
                break;
              }

            default:
              throw new Error("Unsupported ModuleImport of type " + JSON.stringify(field.descr.type));
          }

          break;
        }

      case "Memory":
        {
          moduleContext.addMemory(field.limits.min, field.limits.max);
          break;
        }
    }
  });
  return moduleContext;
}
/**
 * Module context for type checking
 */

var ModuleContext = /*#__PURE__*/function () {
  function ModuleContext() {
    _classCallCheck(this, ModuleContext);

    this.funcs = [];
    this.funcsOffsetByIdentifier = [];
    this.types = [];
    this.globals = [];
    this.globalsOffsetByIdentifier = [];
    this.mems = []; // Current stack frame

    this.locals = [];
    this.labels = [];
    this["return"] = [];
    this.debugName = "unknown";
    this.start = null;
  }
  /**
   * Set start segment
   */


  _createClass(ModuleContext, [{
    key: "setStart",
    value: function setStart(index) {
      this.start = index.value;
    }
    /**
     * Get start function
     */

  }, {
    key: "getStart",
    value: function getStart() {
      return this.start;
    }
    /**
     * Reset the active stack frame
     */

  }, {
    key: "newContext",
    value: function newContext(debugName, expectedResult) {
      this.locals = [];
      this.labels = [expectedResult];
      this["return"] = expectedResult;
      this.debugName = debugName;
    }
    /**
     * Functions
     */

  }, {
    key: "addFunction",
    value: function addFunction(func) {
      /* eslint-disable */
      // $FlowIgnore
      var _ref = func.signature || {},
          _ref$params = _ref.params,
          args = _ref$params === void 0 ? [] : _ref$params,
          _ref$results = _ref.results,
          result = _ref$results === void 0 ? [] : _ref$results;
      /* eslint-enable */


      args = args.map(function (arg) {
        return arg.valtype;
      });
      this.funcs.push({
        args: args,
        result: result
      });

      if (typeof func.name !== "undefined") {
        // $FlowIgnore
        this.funcsOffsetByIdentifier[func.name.value] = this.funcs.length - 1;
      }
    }
  }, {
    key: "importFunction",
    value: function importFunction(funcimport) {
      if ((0,_nodes_js__WEBPACK_IMPORTED_MODULE_0__.isSignature)(funcimport.signature)) {
        // eslint-disable-next-line prefer-const
        var _funcimport$signature = funcimport.signature,
            args = _funcimport$signature.params,
            result = _funcimport$signature.results;
        args = args.map(function (arg) {
          return arg.valtype;
        });
        this.funcs.push({
          args: args,
          result: result
        });
      } else {
        if (!(0,_nodes_js__WEBPACK_IMPORTED_MODULE_0__.isNumberLiteral)(funcimport.signature)) {
          throw new Error('isNumberLiteral(funcimport.signature)' + " error: " + ( false || "unknown"));
        }

        var typeId = funcimport.signature.value;

        if (!this.hasType(typeId)) {
          throw new Error('this.hasType(typeId)' + " error: " + ( false || "unknown"));
        }

        var signature = this.getType(typeId);
        this.funcs.push({
          args: signature.params.map(function (arg) {
            return arg.valtype;
          }),
          result: signature.results
        });
      }

      if (typeof funcimport.id !== "undefined") {
        // imports are first, we can assume their index in the array
        this.funcsOffsetByIdentifier[funcimport.id.value] = this.funcs.length - 1;
      }
    }
  }, {
    key: "hasFunction",
    value: function hasFunction(index) {
      return typeof this.getFunction(index) !== "undefined";
    }
  }, {
    key: "getFunction",
    value: function getFunction(index) {
      if (typeof index !== "number") {
        throw new Error("getFunction only supported for number index");
      }

      return this.funcs[index];
    }
  }, {
    key: "getFunctionOffsetByIdentifier",
    value: function getFunctionOffsetByIdentifier(name) {
      if (!(typeof name === "string")) {
        throw new Error('typeof name === "string"' + " error: " + ( false || "unknown"));
      }

      return this.funcsOffsetByIdentifier[name];
    }
    /**
     * Labels
     */

  }, {
    key: "addLabel",
    value: function addLabel(result) {
      this.labels.unshift(result);
    }
  }, {
    key: "hasLabel",
    value: function hasLabel(index) {
      return this.labels.length > index && index >= 0;
    }
  }, {
    key: "getLabel",
    value: function getLabel(index) {
      return this.labels[index];
    }
  }, {
    key: "popLabel",
    value: function popLabel() {
      this.labels.shift();
    }
    /**
     * Locals
     */

  }, {
    key: "hasLocal",
    value: function hasLocal(index) {
      return typeof this.getLocal(index) !== "undefined";
    }
  }, {
    key: "getLocal",
    value: function getLocal(index) {
      return this.locals[index];
    }
  }, {
    key: "addLocal",
    value: function addLocal(type) {
      this.locals.push(type);
    }
    /**
     * Types
     */

  }, {
    key: "addType",
    value: function addType(type) {
      if (!(type.functype.type === "Signature")) {
        throw new Error('type.functype.type === "Signature"' + " error: " + ( false || "unknown"));
      }

      this.types.push(type.functype);
    }
  }, {
    key: "hasType",
    value: function hasType(index) {
      return this.types[index] !== undefined;
    }
  }, {
    key: "getType",
    value: function getType(index) {
      return this.types[index];
    }
    /**
     * Globals
     */

  }, {
    key: "hasGlobal",
    value: function hasGlobal(index) {
      return this.globals.length > index && index >= 0;
    }
  }, {
    key: "getGlobal",
    value: function getGlobal(index) {
      return this.globals[index].type;
    }
  }, {
    key: "getGlobalOffsetByIdentifier",
    value: function getGlobalOffsetByIdentifier(name) {
      if (!(typeof name === "string")) {
        throw new Error('typeof name === "string"' + " error: " + ( false || "unknown"));
      }

      // $FlowIgnore
      return this.globalsOffsetByIdentifier[name];
    }
  }, {
    key: "defineGlobal",
    value: function defineGlobal(global) {
      var type = global.globalType.valtype;
      var mutability = global.globalType.mutability;
      this.globals.push({
        type: type,
        mutability: mutability
      });

      if (typeof global.name !== "undefined") {
        // $FlowIgnore
        this.globalsOffsetByIdentifier[global.name.value] = this.globals.length - 1;
      }
    }
  }, {
    key: "importGlobal",
    value: function importGlobal(type, mutability) {
      this.globals.push({
        type: type,
        mutability: mutability
      });
    }
  }, {
    key: "isMutableGlobal",
    value: function isMutableGlobal(index) {
      return this.globals[index].mutability === "var";
    }
  }, {
    key: "isImmutableGlobal",
    value: function isImmutableGlobal(index) {
      return this.globals[index].mutability === "const";
    }
    /**
     * Memories
     */

  }, {
    key: "hasMemory",
    value: function hasMemory(index) {
      return this.mems.length > index && index >= 0;
    }
  }, {
    key: "addMemory",
    value: function addMemory(min, max) {
      this.mems.push({
        min: min,
        max: max
      });
    }
  }, {
    key: "getMemory",
    value: function getMemory(index) {
      return this.mems[index];
    }
  }]);

  return ModuleContext;
}();

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/traverse.js":
/*!*********************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/traverse.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   traverse: () => (/* binding */ traverse)
/* harmony export */ });
/* harmony import */ var _node_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-path */ "./node_modules/@webassemblyjs/ast/esm/node-path.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes */ "./node_modules/@webassemblyjs/ast/esm/nodes.js");

 // recursively walks the AST starting at the given node. The callback is invoked for
// and object that has a 'type' property.

function walk(context, callback) {
  var stop = false;

  function innerWalk(context, callback) {
    if (stop) {
      return;
    }

    var node = context.node;

    if (node === undefined) {
      console.warn("traversing with an empty context");
      return;
    }

    if (node._deleted === true) {
      return;
    }

    var path = (0,_node_path__WEBPACK_IMPORTED_MODULE_0__.createPath)(context);
    callback(node.type, path);

    if (path.shouldStop) {
      stop = true;
      return;
    }

    Object.keys(node).forEach(function (prop) {
      var value = node[prop];

      if (value === null || value === undefined) {
        return;
      }

      var valueAsArray = Array.isArray(value) ? value : [value];
      valueAsArray.forEach(function (childNode) {
        if (typeof childNode.type === "string") {
          var childContext = {
            node: childNode,
            parentKey: prop,
            parentPath: path,
            shouldStop: false,
            inList: Array.isArray(value)
          };
          innerWalk(childContext, callback);
        }
      });
    });
  }

  innerWalk(context, callback);
}

var noop = function noop() {};

function traverse(node, visitors) {
  var before = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
  var after = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  Object.keys(visitors).forEach(function (visitor) {
    if (!_nodes__WEBPACK_IMPORTED_MODULE_1__.nodeAndUnionTypes.includes(visitor)) {
      throw new Error("Unexpected visitor ".concat(visitor));
    }
  });
  var context = {
    node: node,
    inList: false,
    shouldStop: false,
    parentPath: null,
    parentKey: null
  };
  walk(context, function (type, path) {
    if (typeof visitors[type] === "function") {
      before(type, path);
      visitors[type](path);
      after(type, path);
    }

    var unionTypes = _nodes__WEBPACK_IMPORTED_MODULE_1__.unionTypesMap[type];

    if (!unionTypes) {
      throw new Error("Unexpected node type ".concat(type));
    }

    unionTypes.forEach(function (unionType) {
      if (typeof visitors[unionType] === "function") {
        before(unionType, path);
        visitors[unionType](path);
        after(unionType, path);
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/utils.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertHasLoc: () => (/* binding */ assertHasLoc),
/* harmony export */   getEndBlockByteOffset: () => (/* binding */ getEndBlockByteOffset),
/* harmony export */   getEndByteOffset: () => (/* binding */ getEndByteOffset),
/* harmony export */   getEndOfSection: () => (/* binding */ getEndOfSection),
/* harmony export */   getFunctionBeginingByteOffset: () => (/* binding */ getFunctionBeginingByteOffset),
/* harmony export */   getSectionMetadata: () => (/* binding */ getSectionMetadata),
/* harmony export */   getSectionMetadatas: () => (/* binding */ getSectionMetadatas),
/* harmony export */   getStartBlockByteOffset: () => (/* binding */ getStartBlockByteOffset),
/* harmony export */   getStartByteOffset: () => (/* binding */ getStartByteOffset),
/* harmony export */   getUniqueNameGenerator: () => (/* binding */ getUniqueNameGenerator),
/* harmony export */   isAnonymous: () => (/* binding */ isAnonymous),
/* harmony export */   orderedInsertNode: () => (/* binding */ orderedInsertNode),
/* harmony export */   shiftLoc: () => (/* binding */ shiftLoc),
/* harmony export */   shiftSection: () => (/* binding */ shiftSection),
/* harmony export */   signatureForOpcode: () => (/* binding */ signatureForOpcode),
/* harmony export */   sortSectionMetadata: () => (/* binding */ sortSectionMetadata)
/* harmony export */ });
/* harmony import */ var _signatures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signatures */ "./node_modules/@webassemblyjs/ast/esm/signatures.js");
/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traverse */ "./node_modules/@webassemblyjs/ast/esm/traverse.js");
/* harmony import */ var _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webassemblyjs/helper-wasm-bytecode */ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





function isAnonymous(ident) {
  return ident.raw === "";
}
function getSectionMetadata(ast, name) {
  var section;
  (0,_traverse__WEBPACK_IMPORTED_MODULE_1__.traverse)(ast, {
    SectionMetadata: function (_SectionMetadata) {
      function SectionMetadata(_x) {
        return _SectionMetadata.apply(this, arguments);
      }

      SectionMetadata.toString = function () {
        return _SectionMetadata.toString();
      };

      return SectionMetadata;
    }(function (_ref) {
      var node = _ref.node;

      if (node.section === name) {
        section = node;
      }
    })
  });
  return section;
}
function getSectionMetadatas(ast, name) {
  var sections = [];
  (0,_traverse__WEBPACK_IMPORTED_MODULE_1__.traverse)(ast, {
    SectionMetadata: function (_SectionMetadata2) {
      function SectionMetadata(_x2) {
        return _SectionMetadata2.apply(this, arguments);
      }

      SectionMetadata.toString = function () {
        return _SectionMetadata2.toString();
      };

      return SectionMetadata;
    }(function (_ref2) {
      var node = _ref2.node;

      if (node.section === name) {
        sections.push(node);
      }
    })
  });
  return sections;
}
function sortSectionMetadata(m) {
  if (m.metadata == null) {
    console.warn("sortSectionMetadata: no metadata to sort");
    return;
  } // $FlowIgnore


  m.metadata.sections.sort(function (a, b) {
    var aId = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_2__["default"].sections[a.section];
    var bId = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_2__["default"].sections[b.section];

    if (typeof aId !== "number" || typeof bId !== "number") {
      throw new Error("Section id not found");
    }

    return aId - bId;
  });
}
function orderedInsertNode(m, n) {
  assertHasLoc(n);
  var didInsert = false;

  if (n.type === "ModuleExport") {
    m.fields.push(n);
    return;
  }

  m.fields = m.fields.reduce(function (acc, field) {
    var fieldEndCol = Infinity;

    if (field.loc != null) {
      // $FlowIgnore
      fieldEndCol = field.loc.end.column;
    } // $FlowIgnore: assertHasLoc ensures that


    if (didInsert === false && n.loc.start.column < fieldEndCol) {
      didInsert = true;
      acc.push(n);
    }

    acc.push(field);
    return acc;
  }, []); // Handles empty modules or n is the last element

  if (didInsert === false) {
    m.fields.push(n);
  }
}
function assertHasLoc(n) {
  if (n.loc == null || n.loc.start == null || n.loc.end == null) {
    throw new Error("Internal failure: node (".concat(JSON.stringify(n.type), ") has no location information"));
  }
}
function getEndOfSection(s) {
  assertHasLoc(s.size);
  return s.startOffset + s.size.value + (s.size.loc.end.column - s.size.loc.start.column);
}
function shiftLoc(node, delta) {
  // $FlowIgnore
  node.loc.start.column += delta; // $FlowIgnore

  node.loc.end.column += delta;
}
function shiftSection(ast, node, delta) {
  if (node.type !== "SectionMetadata") {
    throw new Error("Can not shift node " + JSON.stringify(node.type));
  }

  node.startOffset += delta;

  if (_typeof(node.size.loc) === "object") {
    shiftLoc(node.size, delta);
  } // Custom sections doesn't have vectorOfSize


  if (_typeof(node.vectorOfSize) === "object" && _typeof(node.vectorOfSize.loc) === "object") {
    shiftLoc(node.vectorOfSize, delta);
  }

  var sectionName = node.section; // shift node locations within that section

  (0,_traverse__WEBPACK_IMPORTED_MODULE_1__.traverse)(ast, {
    Node: function Node(_ref3) {
      var node = _ref3.node;
      var section = (0,_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_2__.getSectionForNode)(node);

      if (section === sectionName && _typeof(node.loc) === "object") {
        shiftLoc(node, delta);
      }
    }
  });
}
function signatureForOpcode(object, name) {
  var opcodeName = name;

  if (object !== undefined && object !== "") {
    opcodeName = object + "." + name;
  }

  var sign = _signatures__WEBPACK_IMPORTED_MODULE_0__.signatures[opcodeName];

  if (sign == undefined) {
    // TODO: Uncomment this when br_table and others has been done
    //throw new Error("Invalid opcode: "+opcodeName);
    return [object, object];
  }

  return sign[0];
}
function getUniqueNameGenerator() {
  var inc = {};
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "temp";

    if (!(prefix in inc)) {
      inc[prefix] = 0;
    } else {
      inc[prefix] = inc[prefix] + 1;
    }

    return prefix + "_" + inc[prefix];
  };
}
function getStartByteOffset(n) {
  // $FlowIgnore
  if (typeof n.loc === "undefined" || typeof n.loc.start === "undefined") {
    throw new Error( // $FlowIgnore
    "Can not get byte offset without loc informations, node: " + String(n.id));
  }

  return n.loc.start.column;
}
function getEndByteOffset(n) {
  // $FlowIgnore
  if (typeof n.loc === "undefined" || typeof n.loc.end === "undefined") {
    throw new Error("Can not get byte offset without loc informations, node: " + n.type);
  }

  return n.loc.end.column;
}
function getFunctionBeginingByteOffset(n) {
  if (!(n.body.length > 0)) {
    throw new Error('n.body.length > 0' + " error: " + ( false || "unknown"));
  }

  var _n$body = _slicedToArray(n.body, 1),
      firstInstruction = _n$body[0];

  return getStartByteOffset(firstInstruction);
}
function getEndBlockByteOffset(n) {
  // $FlowIgnore
  if (!(n.instr.length > 0 || n.body.length > 0)) {
    throw new Error('n.instr.length > 0 || n.body.length > 0' + " error: " + ( false || "unknown"));
  }

  var lastInstruction;

  if (n.instr) {
    // $FlowIgnore
    lastInstruction = n.instr[n.instr.length - 1];
  }

  if (n.body) {
    // $FlowIgnore
    lastInstruction = n.body[n.body.length - 1];
  }

  if (!(_typeof(lastInstruction) === "object")) {
    throw new Error('typeof lastInstruction === "object"' + " error: " + ( false || "unknown"));
  }

  // $FlowIgnore
  return getStartByteOffset(lastInstruction);
}
function getStartBlockByteOffset(n) {
  // $FlowIgnore
  if (!(n.instr.length > 0 || n.body.length > 0)) {
    throw new Error('n.instr.length > 0 || n.body.length > 0' + " error: " + ( false || "unknown"));
  }

  var fistInstruction;

  if (n.instr) {
    // $FlowIgnore
    var _n$instr = _slicedToArray(n.instr, 1);

    fistInstruction = _n$instr[0];
  }

  if (n.body) {
    // $FlowIgnore
    var _n$body2 = _slicedToArray(n.body, 1);

    fistInstruction = _n$body2[0];
  }

  if (!(_typeof(fistInstruction) === "object")) {
    throw new Error('typeof fistInstruction === "object"' + " error: " + ( false || "unknown"));
  }

  // $FlowIgnore
  return getStartByteOffset(fistInstruction);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/floating-point-hex-parser/esm/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@webassemblyjs/floating-point-hex-parser/esm/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parse)
/* harmony export */ });
function parse(input) {
  input = input.toUpperCase();
  var splitIndex = input.indexOf("P");
  var mantissa, exponent;

  if (splitIndex !== -1) {
    mantissa = input.substring(0, splitIndex);
    exponent = parseInt(input.substring(splitIndex + 1));
  } else {
    mantissa = input;
    exponent = 0;
  }

  var dotIndex = mantissa.indexOf(".");

  if (dotIndex !== -1) {
    var integerPart = parseInt(mantissa.substring(0, dotIndex), 16);
    var sign = Math.sign(integerPart);
    integerPart = sign * integerPart;
    var fractionLength = mantissa.length - dotIndex - 1;
    var fractionalPart = parseInt(mantissa.substring(dotIndex + 1), 16);
    var fraction = fractionLength > 0 ? fractionalPart / Math.pow(16, fractionLength) : 0;

    if (sign === 0) {
      if (fraction === 0) {
        mantissa = sign;
      } else {
        if (Object.is(sign, -0)) {
          mantissa = -fraction;
        } else {
          mantissa = fraction;
        }
      }
    } else {
      mantissa = sign * (integerPart + fraction);
    }
  } else {
    mantissa = parseInt(mantissa, 16);
  }

  return mantissa * (splitIndex !== -1 ? Math.pow(2, exponent) : 1);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/helper-api-error/esm/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@webassemblyjs/helper-api-error/esm/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompileError: () => (/* binding */ CompileError),
/* harmony export */   LinkError: () => (/* binding */ LinkError),
/* harmony export */   RuntimeError: () => (/* binding */ RuntimeError)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RuntimeError = /*#__PURE__*/function (_Error) {
  _inherits(RuntimeError, _Error);

  var _super = _createSuper(RuntimeError);

  function RuntimeError() {
    _classCallCheck(this, RuntimeError);

    return _super.apply(this, arguments);
  }

  return RuntimeError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var CompileError = /*#__PURE__*/function (_Error2) {
  _inherits(CompileError, _Error2);

  var _super2 = _createSuper(CompileError);

  function CompileError() {
    _classCallCheck(this, CompileError);

    return _super2.apply(this, arguments);
  }

  return CompileError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var LinkError = /*#__PURE__*/function (_Error3) {
  _inherits(LinkError, _Error3);

  var _super3 = _createSuper(LinkError);

  function LinkError() {
    _classCallCheck(this, LinkError);

    return _super3.apply(this, arguments);
  }

  return LinkError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ "./node_modules/@webassemblyjs/helper-numbers/esm/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@webassemblyjs/helper-numbers/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInfLiteral: () => (/* binding */ isInfLiteral),
/* harmony export */   isNanLiteral: () => (/* binding */ isNanLiteral),
/* harmony export */   parse32F: () => (/* binding */ parse32F),
/* harmony export */   parse32I: () => (/* binding */ parse32I),
/* harmony export */   parse64F: () => (/* binding */ parse64F),
/* harmony export */   parse64I: () => (/* binding */ parse64I),
/* harmony export */   parseU32: () => (/* binding */ parseU32)
/* harmony export */ });
/* harmony import */ var _xtuc_long__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xtuc/long */ "./node_modules/@xtuc/long/src/long.js");
/* harmony import */ var _xtuc_long__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xtuc_long__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webassemblyjs_floating_point_hex_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webassemblyjs/floating-point-hex-parser */ "./node_modules/@webassemblyjs/floating-point-hex-parser/esm/index.js");
/* harmony import */ var _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webassemblyjs/helper-api-error */ "./node_modules/@webassemblyjs/helper-api-error/esm/index.js");



function parse32F(sourceString) {
  if (isHexLiteral(sourceString)) {
    return (0,_webassemblyjs_floating_point_hex_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(sourceString);
  }

  if (isInfLiteral(sourceString)) {
    return sourceString[0] === "-" ? -1 : 1;
  }

  if (isNanLiteral(sourceString)) {
    return (sourceString[0] === "-" ? -1 : 1) * (sourceString.includes(":") ? parseInt(sourceString.substring(sourceString.indexOf(":") + 1), 16) : 0x400000);
  }

  return parseFloat(sourceString);
}
function parse64F(sourceString) {
  if (isHexLiteral(sourceString)) {
    return (0,_webassemblyjs_floating_point_hex_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(sourceString);
  }

  if (isInfLiteral(sourceString)) {
    return sourceString[0] === "-" ? -1 : 1;
  }

  if (isNanLiteral(sourceString)) {
    return (sourceString[0] === "-" ? -1 : 1) * (sourceString.includes(":") ? parseInt(sourceString.substring(sourceString.indexOf(":") + 1), 16) : 0x8000000000000);
  }

  if (isHexLiteral(sourceString)) {
    return (0,_webassemblyjs_floating_point_hex_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(sourceString);
  }

  return parseFloat(sourceString);
}
function parse32I(sourceString) {
  var value = 0;

  if (isHexLiteral(sourceString)) {
    value = ~~parseInt(sourceString, 16);
  } else if (isDecimalExponentLiteral(sourceString)) {
    throw new Error("This number literal format is yet to be implemented.");
  } else {
    value = parseInt(sourceString, 10);
  }

  return value;
}
function parseU32(sourceString) {
  var value = parse32I(sourceString);

  if (value < 0) {
    throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_2__.CompileError("Illegal value for u32: " + sourceString);
  }

  return value;
}
function parse64I(sourceString) {
  // $FlowIgnore
  var _long;

  if (isHexLiteral(sourceString)) {
    _long = _xtuc_long__WEBPACK_IMPORTED_MODULE_0___default().fromString(sourceString, false, 16);
  } else if (isDecimalExponentLiteral(sourceString)) {
    throw new Error("This number literal format is yet to be implemented.");
  } else {
    _long = _xtuc_long__WEBPACK_IMPORTED_MODULE_0___default().fromString(sourceString);
  }

  return {
    high: _long.high,
    low: _long.low
  };
}
var NAN_WORD = /^\+?-?nan/;
var INF_WORD = /^\+?-?inf/;
function isInfLiteral(sourceString) {
  return INF_WORD.test(sourceString.toLowerCase());
}
function isNanLiteral(sourceString) {
  return NAN_WORD.test(sourceString.toLowerCase());
}

function isDecimalExponentLiteral(sourceString) {
  return !isHexLiteral(sourceString) && sourceString.toUpperCase().includes("E");
}

function isHexLiteral(sourceString) {
  return sourceString.substring(0, 2).toUpperCase() === "0X" || sourceString.substring(0, 3).toUpperCase() === "-0X";
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getSectionForNode: () => (/* reexport safe */ _section__WEBPACK_IMPORTED_MODULE_0__.getSectionForNode)
/* harmony export */ });
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section */ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/section.js");
var illegalop = "illegal";
var magicModuleHeader = [0x00, 0x61, 0x73, 0x6d];
var moduleVersion = [0x01, 0x00, 0x00, 0x00];

function invertMap(obj) {
  var keyModifierFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (k) {
    return k;
  };
  var result = {};
  var keys = Object.keys(obj);

  for (var i = 0, length = keys.length; i < length; i++) {
    result[keyModifierFn(obj[keys[i]])] = keys[i];
  }

  return result;
}

function createSymbolObject(name
/*: string */
, object
/*: string */
)
/*: Symbol*/
{
  var numberOfArgs
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return {
    name: name,
    object: object,
    numberOfArgs: numberOfArgs
  };
}

function createSymbol(name
/*: string */
)
/*: Symbol*/
{
  var numberOfArgs
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    name: name,
    numberOfArgs: numberOfArgs
  };
}

var types = {
  func: 0x60,
  result: 0x40
};
var exportTypes = {
  0x00: "Func",
  0x01: "Table",
  0x02: "Memory",
  0x03: "Global"
};
var exportTypesByName = invertMap(exportTypes);
var valtypes = {
  // numtype
  0x7f: "i32",
  0x7e: "i64",
  0x7d: "f32",
  0x7c: "f64",
  // vectype
  0x7b: "v128",
  // reftype
  0x70: "anyfunc",
  0x6f: "externref"
};
var valtypesByString = invertMap(valtypes);
var tableTypes = {
  0x70: "anyfunc",
  0x6f: "externref"
};
var blockTypes = Object.assign({}, valtypes, {
  // https://webassembly.github.io/spec/core/binary/types.html#binary-blocktype
  0x40: null,
  // https://webassembly.github.io/spec/core/binary/types.html#binary-valtype
  0x7f: "i32",
  0x7e: "i64",
  0x7d: "f32",
  0x7c: "f64"
});
var globalTypes = {
  0x00: "const",
  0x01: "var"
};
var globalTypesByString = invertMap(globalTypes);
var importTypes = {
  0x00: "func",
  0x01: "table",
  0x02: "memory",
  0x03: "global"
};
var sections = {
  custom: 0,
  type: 1,
  "import": 2,
  func: 3,
  table: 4,
  memory: 5,
  global: 6,
  "export": 7,
  start: 8,
  element: 9,
  code: 10,
  data: 11
};
var symbolsByByte = {
  0x00: createSymbol("unreachable"),
  0x01: createSymbol("nop"),
  0x02: createSymbol("block"),
  0x03: createSymbol("loop"),
  0x04: createSymbol("if"),
  0x05: createSymbol("else"),
  0x06: illegalop,
  0x07: illegalop,
  0x08: illegalop,
  0x09: illegalop,
  0x0a: illegalop,
  0x0b: createSymbol("end"),
  0x0c: createSymbol("br", 1),
  0x0d: createSymbol("br_if", 1),
  0x0e: createSymbol("br_table"),
  0x0f: createSymbol("return"),
  0x10: createSymbol("call", 1),
  0x11: createSymbol("call_indirect", 2),
  0x12: illegalop,
  0x13: illegalop,
  0x14: illegalop,
  0x15: illegalop,
  0x16: illegalop,
  0x17: illegalop,
  0x18: illegalop,
  0x19: illegalop,
  0x1a: createSymbol("drop"),
  0x1b: createSymbol("select"),
  0x1c: illegalop,
  0x1d: illegalop,
  0x1e: illegalop,
  0x1f: illegalop,
  0x20: createSymbol("get_local", 1),
  0x21: createSymbol("set_local", 1),
  0x22: createSymbol("tee_local", 1),
  0x23: createSymbol("get_global", 1),
  0x24: createSymbol("set_global", 1),
  0x25: createSymbol("table.get", 1),
  0x26: createSymbol("table.set", 1),
  0x27: illegalop,
  0x28: createSymbolObject("load", "u32", 1),
  0x29: createSymbolObject("load", "u64", 1),
  0x2a: createSymbolObject("load", "f32", 1),
  0x2b: createSymbolObject("load", "f64", 1),
  0x2c: createSymbolObject("load8_s", "u32", 1),
  0x2d: createSymbolObject("load8_u", "u32", 1),
  0x2e: createSymbolObject("load16_s", "u32", 1),
  0x2f: createSymbolObject("load16_u", "u32", 1),
  0x30: createSymbolObject("load8_s", "u64", 1),
  0x31: createSymbolObject("load8_u", "u64", 1),
  0x32: createSymbolObject("load16_s", "u64", 1),
  0x33: createSymbolObject("load16_u", "u64", 1),
  0x34: createSymbolObject("load32_s", "u64", 1),
  0x35: createSymbolObject("load32_u", "u64", 1),
  0x36: createSymbolObject("store", "u32", 1),
  0x37: createSymbolObject("store", "u64", 1),
  0x38: createSymbolObject("store", "f32", 1),
  0x39: createSymbolObject("store", "f64", 1),
  0x3a: createSymbolObject("store8", "u32", 1),
  0x3b: createSymbolObject("store16", "u32", 1),
  0x3c: createSymbolObject("store8", "u64", 1),
  0x3d: createSymbolObject("store16", "u64", 1),
  0x3e: createSymbolObject("store32", "u64", 1),
  0x3f: createSymbolObject("current_memory"),
  0x40: createSymbolObject("grow_memory"),
  0x41: createSymbolObject("const", "i32", 1),
  0x42: createSymbolObject("const", "i64", 1),
  0x43: createSymbolObject("const", "f32", 1),
  0x44: createSymbolObject("const", "f64", 1),
  0x45: createSymbolObject("eqz", "i32"),
  0x46: createSymbolObject("eq", "i32"),
  0x47: createSymbolObject("ne", "i32"),
  0x48: createSymbolObject("lt_s", "i32"),
  0x49: createSymbolObject("lt_u", "i32"),
  0x4a: createSymbolObject("gt_s", "i32"),
  0x4b: createSymbolObject("gt_u", "i32"),
  0x4c: createSymbolObject("le_s", "i32"),
  0x4d: createSymbolObject("le_u", "i32"),
  0x4e: createSymbolObject("ge_s", "i32"),
  0x4f: createSymbolObject("ge_u", "i32"),
  0x50: createSymbolObject("eqz", "i64"),
  0x51: createSymbolObject("eq", "i64"),
  0x52: createSymbolObject("ne", "i64"),
  0x53: createSymbolObject("lt_s", "i64"),
  0x54: createSymbolObject("lt_u", "i64"),
  0x55: createSymbolObject("gt_s", "i64"),
  0x56: createSymbolObject("gt_u", "i64"),
  0x57: createSymbolObject("le_s", "i64"),
  0x58: createSymbolObject("le_u", "i64"),
  0x59: createSymbolObject("ge_s", "i64"),
  0x5a: createSymbolObject("ge_u", "i64"),
  0x5b: createSymbolObject("eq", "f32"),
  0x5c: createSymbolObject("ne", "f32"),
  0x5d: createSymbolObject("lt", "f32"),
  0x5e: createSymbolObject("gt", "f32"),
  0x5f: createSymbolObject("le", "f32"),
  0x60: createSymbolObject("ge", "f32"),
  0x61: createSymbolObject("eq", "f64"),
  0x62: createSymbolObject("ne", "f64"),
  0x63: createSymbolObject("lt", "f64"),
  0x64: createSymbolObject("gt", "f64"),
  0x65: createSymbolObject("le", "f64"),
  0x66: createSymbolObject("ge", "f64"),
  0x67: createSymbolObject("clz", "i32"),
  0x68: createSymbolObject("ctz", "i32"),
  0x69: createSymbolObject("popcnt", "i32"),
  0x6a: createSymbolObject("add", "i32"),
  0x6b: createSymbolObject("sub", "i32"),
  0x6c: createSymbolObject("mul", "i32"),
  0x6d: createSymbolObject("div_s", "i32"),
  0x6e: createSymbolObject("div_u", "i32"),
  0x6f: createSymbolObject("rem_s", "i32"),
  0x70: createSymbolObject("rem_u", "i32"),
  0x71: createSymbolObject("and", "i32"),
  0x72: createSymbolObject("or", "i32"),
  0x73: createSymbolObject("xor", "i32"),
  0x74: createSymbolObject("shl", "i32"),
  0x75: createSymbolObject("shr_s", "i32"),
  0x76: createSymbolObject("shr_u", "i32"),
  0x77: createSymbolObject("rotl", "i32"),
  0x78: createSymbolObject("rotr", "i32"),
  0x79: createSymbolObject("clz", "i64"),
  0x7a: createSymbolObject("ctz", "i64"),
  0x7b: createSymbolObject("popcnt", "i64"),
  0x7c: createSymbolObject("add", "i64"),
  0x7d: createSymbolObject("sub", "i64"),
  0x7e: createSymbolObject("mul", "i64"),
  0x7f: createSymbolObject("div_s", "i64"),
  0x80: createSymbolObject("div_u", "i64"),
  0x81: createSymbolObject("rem_s", "i64"),
  0x82: createSymbolObject("rem_u", "i64"),
  0x83: createSymbolObject("and", "i64"),
  0x84: createSymbolObject("or", "i64"),
  0x85: createSymbolObject("xor", "i64"),
  0x86: createSymbolObject("shl", "i64"),
  0x87: createSymbolObject("shr_s", "i64"),
  0x88: createSymbolObject("shr_u", "i64"),
  0x89: createSymbolObject("rotl", "i64"),
  0x8a: createSymbolObject("rotr", "i64"),
  0x8b: createSymbolObject("abs", "f32"),
  0x8c: createSymbolObject("neg", "f32"),
  0x8d: createSymbolObject("ceil", "f32"),
  0x8e: createSymbolObject("floor", "f32"),
  0x8f: createSymbolObject("trunc", "f32"),
  0x90: createSymbolObject("nearest", "f32"),
  0x91: createSymbolObject("sqrt", "f32"),
  0x92: createSymbolObject("add", "f32"),
  0x93: createSymbolObject("sub", "f32"),
  0x94: createSymbolObject("mul", "f32"),
  0x95: createSymbolObject("div", "f32"),
  0x96: createSymbolObject("min", "f32"),
  0x97: createSymbolObject("max", "f32"),
  0x98: createSymbolObject("copysign", "f32"),
  0x99: createSymbolObject("abs", "f64"),
  0x9a: createSymbolObject("neg", "f64"),
  0x9b: createSymbolObject("ceil", "f64"),
  0x9c: createSymbolObject("floor", "f64"),
  0x9d: createSymbolObject("trunc", "f64"),
  0x9e: createSymbolObject("nearest", "f64"),
  0x9f: createSymbolObject("sqrt", "f64"),
  0xa0: createSymbolObject("add", "f64"),
  0xa1: createSymbolObject("sub", "f64"),
  0xa2: createSymbolObject("mul", "f64"),
  0xa3: createSymbolObject("div", "f64"),
  0xa4: createSymbolObject("min", "f64"),
  0xa5: createSymbolObject("max", "f64"),
  0xa6: createSymbolObject("copysign", "f64"),
  0xa7: createSymbolObject("wrap/i64", "i32"),
  0xa8: createSymbolObject("trunc_s/f32", "i32"),
  0xa9: createSymbolObject("trunc_u/f32", "i32"),
  0xaa: createSymbolObject("trunc_s/f64", "i32"),
  0xab: createSymbolObject("trunc_u/f64", "i32"),
  0xac: createSymbolObject("extend_s/i32", "i64"),
  0xad: createSymbolObject("extend_u/i32", "i64"),
  0xae: createSymbolObject("trunc_s/f32", "i64"),
  0xaf: createSymbolObject("trunc_u/f32", "i64"),
  0xb0: createSymbolObject("trunc_s/f64", "i64"),
  0xb1: createSymbolObject("trunc_u/f64", "i64"),
  0xb2: createSymbolObject("convert_s/i32", "f32"),
  0xb3: createSymbolObject("convert_u/i32", "f32"),
  0xb4: createSymbolObject("convert_s/i64", "f32"),
  0xb5: createSymbolObject("convert_u/i64", "f32"),
  0xb6: createSymbolObject("demote/f64", "f32"),
  0xb7: createSymbolObject("convert_s/i32", "f64"),
  0xb8: createSymbolObject("convert_u/i32", "f64"),
  0xb9: createSymbolObject("convert_s/i64", "f64"),
  0xba: createSymbolObject("convert_u/i64", "f64"),
  0xbb: createSymbolObject("promote/f32", "f64"),
  0xbc: createSymbolObject("reinterpret/f32", "i32"),
  0xbd: createSymbolObject("reinterpret/f64", "i64"),
  0xbe: createSymbolObject("reinterpret/i32", "f32"),
  0xbf: createSymbolObject("reinterpret/i64", "f64"),
  0xc0: createSymbolObject("extend8_s", "i32"),
  0xc1: createSymbolObject("extend16_s", "i32"),
  0xc2: createSymbolObject("extend8_s", "i64"),
  0xc3: createSymbolObject("extend16_s", "i64"),
  0xc4: createSymbolObject("extend32_s", "i64"),
  0xd0: createSymbol("ref.null"),
  0xd1: createSymbol("ref.is_null"),
  0xd2: createSymbol("ref.func", 1),
  0xfc0a: createSymbol("memory.copy"),
  0xfc0b: createSymbol("memory.fill"),
  // Table instructions
  // https://webassembly.github.io/spec/core/binary/instructions.html#table-instructions
  0xfc0c: createSymbol("table.init", 2),
  0xfc0d: createSymbol("elem.drop", 1),
  0xfc0e: createSymbol("table.copy", 2),
  0xfc0f: createSymbol("table.grow", 1),
  0xfc10: createSymbol("table.size", 1),
  0xfc11: createSymbol("table.fill", 1),
  // Atomic Memory Instructions
  0xfe00: createSymbol("memory.atomic.notify", 1),
  0xfe01: createSymbol("memory.atomic.wait32", 1),
  0xfe02: createSymbol("memory.atomic.wait64", 1),
  0xfe10: createSymbolObject("atomic.load", "i32", 1),
  0xfe11: createSymbolObject("atomic.load", "i64", 1),
  0xfe12: createSymbolObject("atomic.load8_u", "i32", 1),
  0xfe13: createSymbolObject("atomic.load16_u", "i32", 1),
  0xfe14: createSymbolObject("atomic.load8_u", "i64", 1),
  0xfe15: createSymbolObject("atomic.load16_u", "i64", 1),
  0xfe16: createSymbolObject("atomic.load32_u", "i64", 1),
  0xfe17: createSymbolObject("atomic.store", "i32", 1),
  0xfe18: createSymbolObject("atomic.store", "i64", 1),
  0xfe19: createSymbolObject("atomic.store8_u", "i32", 1),
  0xfe1a: createSymbolObject("atomic.store16_u", "i32", 1),
  0xfe1b: createSymbolObject("atomic.store8_u", "i64", 1),
  0xfe1c: createSymbolObject("atomic.store16_u", "i64", 1),
  0xfe1d: createSymbolObject("atomic.store32_u", "i64", 1),
  0xfe1e: createSymbolObject("atomic.rmw.add", "i32", 1),
  0xfe1f: createSymbolObject("atomic.rmw.add", "i64", 1),
  0xfe20: createSymbolObject("atomic.rmw8_u.add_u", "i32", 1),
  0xfe21: createSymbolObject("atomic.rmw16_u.add_u", "i32", 1),
  0xfe22: createSymbolObject("atomic.rmw8_u.add_u", "i64", 1),
  0xfe23: createSymbolObject("atomic.rmw16_u.add_u", "i64", 1),
  0xfe24: createSymbolObject("atomic.rmw32_u.add_u", "i64", 1),
  0xfe25: createSymbolObject("atomic.rmw.sub", "i32", 1),
  0xfe26: createSymbolObject("atomic.rmw.sub", "i64", 1),
  0xfe27: createSymbolObject("atomic.rmw8_u.sub_u", "i32", 1),
  0xfe28: createSymbolObject("atomic.rmw16_u.sub_u", "i32", 1),
  0xfe29: createSymbolObject("atomic.rmw8_u.sub_u", "i64", 1),
  0xfe2a: createSymbolObject("atomic.rmw16_u.sub_u", "i64", 1),
  0xfe2b: createSymbolObject("atomic.rmw32_u.sub_u", "i64", 1),
  0xfe2c: createSymbolObject("atomic.rmw.and", "i32", 1),
  0xfe2d: createSymbolObject("atomic.rmw.and", "i64", 1),
  0xfe2e: createSymbolObject("atomic.rmw8_u.and_u", "i32", 1),
  0xfe2f: createSymbolObject("atomic.rmw16_u.and_u", "i32", 1),
  0xfe30: createSymbolObject("atomic.rmw8_u.and_u", "i64", 1),
  0xfe31: createSymbolObject("atomic.rmw16_u.and_u", "i64", 1),
  0xfe32: createSymbolObject("atomic.rmw32_u.and_u", "i64", 1),
  0xfe33: createSymbolObject("atomic.rmw.or", "i32", 1),
  0xfe34: createSymbolObject("atomic.rmw.or", "i64", 1),
  0xfe35: createSymbolObject("atomic.rmw8_u.or_u", "i32", 1),
  0xfe36: createSymbolObject("atomic.rmw16_u.or_u", "i32", 1),
  0xfe37: createSymbolObject("atomic.rmw8_u.or_u", "i64", 1),
  0xfe38: createSymbolObject("atomic.rmw16_u.or_u", "i64", 1),
  0xfe39: createSymbolObject("atomic.rmw32_u.or_u", "i64", 1),
  0xfe3a: createSymbolObject("atomic.rmw.xor", "i32", 1),
  0xfe3b: createSymbolObject("atomic.rmw.xor", "i64", 1),
  0xfe3c: createSymbolObject("atomic.rmw8_u.xor_u", "i32", 1),
  0xfe3d: createSymbolObject("atomic.rmw16_u.xor_u", "i32", 1),
  0xfe3e: createSymbolObject("atomic.rmw8_u.xor_u", "i64", 1),
  0xfe3f: createSymbolObject("atomic.rmw16_u.xor_u", "i64", 1),
  0xfe40: createSymbolObject("atomic.rmw32_u.xor_u", "i64", 1),
  0xfe41: createSymbolObject("atomic.rmw.xchg", "i32", 1),
  0xfe42: createSymbolObject("atomic.rmw.xchg", "i64", 1),
  0xfe43: createSymbolObject("atomic.rmw8_u.xchg_u", "i32", 1),
  0xfe44: createSymbolObject("atomic.rmw16_u.xchg_u", "i32", 1),
  0xfe45: createSymbolObject("atomic.rmw8_u.xchg_u", "i64", 1),
  0xfe46: createSymbolObject("atomic.rmw16_u.xchg_u", "i64", 1),
  0xfe47: createSymbolObject("atomic.rmw32_u.xchg_u", "i64", 1),
  0xfe48: createSymbolObject("atomic.rmw.cmpxchg", "i32", 1),
  0xfe49: createSymbolObject("atomic.rmw.cmpxchg", "i64", 1),
  0xfe4a: createSymbolObject("atomic.rmw8_u.cmpxchg_u", "i32", 1),
  0xfe4b: createSymbolObject("atomic.rmw16_u.cmpxchg_u", "i32", 1),
  0xfe4c: createSymbolObject("atomic.rmw8_u.cmpxchg_u", "i64", 1),
  0xfe4d: createSymbolObject("atomic.rmw16_u.cmpxchg_u", "i64", 1),
  0xfe4e: createSymbolObject("atomic.rmw32_u.cmpxchg_u", "i64", 1)
};
var symbolsByName = invertMap(symbolsByByte, function (obj) {
  if (typeof obj.object === "string") {
    return "".concat(obj.object, ".").concat(obj.name);
  }

  return obj.name;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  symbolsByByte: symbolsByByte,
  sections: sections,
  magicModuleHeader: magicModuleHeader,
  moduleVersion: moduleVersion,
  types: types,
  valtypes: valtypes,
  exportTypes: exportTypes,
  blockTypes: blockTypes,
  tableTypes: tableTypes,
  globalTypes: globalTypes,
  importTypes: importTypes,
  valtypesByString: valtypesByString,
  globalTypesByString: globalTypesByString,
  exportTypesByName: exportTypesByName,
  symbolsByName: symbolsByName
});


/***/ }),

/***/ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/section.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/section.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSectionForNode: () => (/* binding */ getSectionForNode)
/* harmony export */ });
function getSectionForNode(n) {
  switch (n.type) {
    case "ModuleImport":
      return "import";

    case "CallInstruction":
    case "CallIndirectInstruction":
    case "Func":
    case "Instr":
      return "code";

    case "ModuleExport":
      return "export";

    case "Start":
      return "start";

    case "TypeInstruction":
      return "type";

    case "IndexInFuncSection":
      return "func";

    case "Global":
      return "global";
    // No section

    default:
      return;
  }
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/ieee754/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@webassemblyjs/ieee754/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOUBLE_PRECISION_MANTISSA: () => (/* binding */ DOUBLE_PRECISION_MANTISSA),
/* harmony export */   NUMBER_OF_BYTE_F32: () => (/* binding */ NUMBER_OF_BYTE_F32),
/* harmony export */   NUMBER_OF_BYTE_F64: () => (/* binding */ NUMBER_OF_BYTE_F64),
/* harmony export */   SINGLE_PRECISION_MANTISSA: () => (/* binding */ SINGLE_PRECISION_MANTISSA),
/* harmony export */   decodeF32: () => (/* binding */ decodeF32),
/* harmony export */   decodeF64: () => (/* binding */ decodeF64),
/* harmony export */   encodeF32: () => (/* binding */ encodeF32),
/* harmony export */   encodeF64: () => (/* binding */ encodeF64)
/* harmony export */ });
/* harmony import */ var _xtuc_ieee754__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xtuc/ieee754 */ "./node_modules/@xtuc/ieee754/index.js");

/**
 * According to https://webassembly.github.io/spec/binary/values.html#binary-float
 * n = 32/8
 */

var NUMBER_OF_BYTE_F32 = 4;
/**
 * According to https://webassembly.github.io/spec/binary/values.html#binary-float
 * n = 64/8
 */

var NUMBER_OF_BYTE_F64 = 8;
var SINGLE_PRECISION_MANTISSA = 23;
var DOUBLE_PRECISION_MANTISSA = 52;
function encodeF32(v) {
  var buffer = [];
  (0,_xtuc_ieee754__WEBPACK_IMPORTED_MODULE_0__.write)(buffer, v, 0, true, SINGLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F32);
  return buffer;
}
function encodeF64(v) {
  var buffer = [];
  (0,_xtuc_ieee754__WEBPACK_IMPORTED_MODULE_0__.write)(buffer, v, 0, true, DOUBLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F64);
  return buffer;
}
function decodeF32(bytes) {
  var buffer = new Uint8Array(bytes);
  return (0,_xtuc_ieee754__WEBPACK_IMPORTED_MODULE_0__.read)(buffer, 0, true, SINGLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F32);
}
function decodeF64(bytes) {
  var buffer = new Uint8Array(bytes);
  return (0,_xtuc_ieee754__WEBPACK_IMPORTED_MODULE_0__.read)(buffer, 0, true, DOUBLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F64);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/leb128/esm/bits.js":
/*!********************************************************!*\
  !*** ./node_modules/@webassemblyjs/leb128/esm/bits.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extract: () => (/* binding */ extract),
/* harmony export */   getSign: () => (/* binding */ getSign),
/* harmony export */   highOrder: () => (/* binding */ highOrder),
/* harmony export */   inject: () => (/* binding */ inject)
/* harmony export */ });
// Copyright 2012 The Obvious Corporation.

/*
 * bits: Bitwise buffer utilities. The utilities here treat a buffer
 * as a little-endian bigint, so the lowest-order bit is bit #0 of
 * `buffer[0]`, and the highest-order bit is bit #7 of
 * `buffer[buffer.length - 1]`.
 */

/*
 * Modules used
 */

/*
 * Exported bindings
 */

/**
 * Extracts the given number of bits from the buffer at the indicated
 * index, returning a simple number as the result. If bits are requested
 * that aren't covered by the buffer, the `defaultBit` is used as their
 * value.
 *
 * The `bitLength` must be no more than 32. The `defaultBit` if not
 * specified is taken to be `0`.
 */

function extract(buffer, bitIndex, bitLength, defaultBit) {
  if (bitLength < 0 || bitLength > 32) {
    throw new Error("Bad value for bitLength.");
  }

  if (defaultBit === undefined) {
    defaultBit = 0;
  } else if (defaultBit !== 0 && defaultBit !== 1) {
    throw new Error("Bad value for defaultBit.");
  }

  var defaultByte = defaultBit * 0xff;
  var result = 0; // All starts are inclusive. The {endByte, endBit} pair is exclusive, but
  // if endBit !== 0, then endByte is inclusive.

  var lastBit = bitIndex + bitLength;
  var startByte = Math.floor(bitIndex / 8);
  var startBit = bitIndex % 8;
  var endByte = Math.floor(lastBit / 8);
  var endBit = lastBit % 8;

  if (endBit !== 0) {
    // `(1 << endBit) - 1` is the mask of all bits up to but not including
    // the endBit.
    result = get(endByte) & (1 << endBit) - 1;
  }

  while (endByte > startByte) {
    endByte--;
    result = result << 8 | get(endByte);
  }

  result >>>= startBit;
  return result;

  function get(index) {
    var result = buffer[index];
    return result === undefined ? defaultByte : result;
  }
}
/**
 * Injects the given bits into the given buffer at the given index. Any
 * bits in the value beyond the length to set are ignored.
 */

function inject(buffer, bitIndex, bitLength, value) {
  if (bitLength < 0 || bitLength > 32) {
    throw new Error("Bad value for bitLength.");
  }

  var lastByte = Math.floor((bitIndex + bitLength - 1) / 8);

  if (bitIndex < 0 || lastByte >= buffer.length) {
    throw new Error("Index out of range.");
  } // Just keeping it simple, until / unless profiling shows that this
  // is a problem.


  var atByte = Math.floor(bitIndex / 8);
  var atBit = bitIndex % 8;

  while (bitLength > 0) {
    if (value & 1) {
      buffer[atByte] |= 1 << atBit;
    } else {
      buffer[atByte] &= ~(1 << atBit);
    }

    value >>= 1;
    bitLength--;
    atBit = (atBit + 1) % 8;

    if (atBit === 0) {
      atByte++;
    }
  }
}
/**
 * Gets the sign bit of the given buffer.
 */

function getSign(buffer) {
  return buffer[buffer.length - 1] >>> 7;
}
/**
 * Gets the zero-based bit number of the highest-order bit with the
 * given value in the given buffer.
 *
 * If the buffer consists entirely of the other bit value, then this returns
 * `-1`.
 */

function highOrder(bit, buffer) {
  var length = buffer.length;
  var fullyWrongByte = (bit ^ 1) * 0xff; // the other-bit extended to a full byte

  while (length > 0 && buffer[length - 1] === fullyWrongByte) {
    length--;
  }

  if (length === 0) {
    // Degenerate case. The buffer consists entirely of ~bit.
    return -1;
  }

  var byteToCheck = buffer[length - 1];
  var result = length * 8 - 1;

  for (var i = 7; i > 0; i--) {
    if ((byteToCheck >> i & 1) === bit) {
      break;
    }

    result--;
  }

  return result;
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/leb128/esm/bufs.js":
/*!********************************************************!*\
  !*** ./node_modules/@webassemblyjs/leb128/esm/bufs.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alloc: () => (/* binding */ alloc),
/* harmony export */   free: () => (/* binding */ free),
/* harmony export */   readInt: () => (/* binding */ readInt),
/* harmony export */   readUInt: () => (/* binding */ readUInt),
/* harmony export */   resize: () => (/* binding */ resize),
/* harmony export */   writeInt64: () => (/* binding */ writeInt64),
/* harmony export */   writeUInt64: () => (/* binding */ writeUInt64)
/* harmony export */ });
// Copyright 2012 The Obvious Corporation.

/*
 * bufs: Buffer utilities.
 */

/*
 * Module variables
 */

/** Pool of buffers, where `bufPool[x].length === x`. */
var bufPool = [];
/** Maximum length of kept temporary buffers. */

var TEMP_BUF_MAXIMUM_LENGTH = 20;
/** Minimum exactly-representable 64-bit int. */

var MIN_EXACT_INT64 = -0x8000000000000000;
/** Maximum exactly-representable 64-bit int. */

var MAX_EXACT_INT64 = 0x7ffffffffffffc00;
/** Maximum exactly-representable 64-bit uint. */

var MAX_EXACT_UINT64 = 0xfffffffffffff800;
/**
 * The int value consisting just of a 1 in bit #32 (that is, one more
 * than the maximum 32-bit unsigned value).
 */

var BIT_32 = 0x100000000;
/**
 * The int value consisting just of a 1 in bit #64 (that is, one more
 * than the maximum 64-bit unsigned value).
 */

var BIT_64 = 0x10000000000000000;
/*
 * Helper functions
 */

/**
 * Masks off all but the lowest bit set of the given number.
 */

function lowestBit(num) {
  return num & -num;
}
/**
 * Gets whether trying to add the second number to the first is lossy
 * (inexact). The first number is meant to be an accumulated result.
 */


function isLossyToAdd(accum, num) {
  if (num === 0) {
    return false;
  }

  var lowBit = lowestBit(num);
  var added = accum + lowBit;

  if (added === accum) {
    return true;
  }

  if (added - lowBit !== accum) {
    return true;
  }

  return false;
}
/*
 * Exported functions
 */

/**
 * Allocates a buffer of the given length, which is initialized
 * with all zeroes. This returns a buffer from the pool if it is
 * available, or a freshly-allocated buffer if not.
 */


function alloc(length) {
  var result = bufPool[length];

  if (result) {
    bufPool[length] = undefined;
  } else {
    result = new Uint8Array(length);
  }

  result.fill(0);
  return result;
}
/**
 * Releases a buffer back to the pool.
 */

function free(buffer) {
  var length = buffer.length;

  if (length < TEMP_BUF_MAXIMUM_LENGTH) {
    bufPool[length] = buffer;
  }
}
/**
 * Resizes a buffer, returning a new buffer. Returns the argument if
 * the length wouldn't actually change. This function is only safe to
 * use if the given buffer was allocated within this module (since
 * otherwise the buffer might possibly be shared externally).
 */

function resize(buffer, length) {
  if (length === buffer.length) {
    return buffer;
  }

  var newBuf = alloc(length);

  for (var i = 0; i <= buffer.length; i++) {
    newBuf[i] = buffer[i];
  }

  free(buffer);
  return newBuf;
}
/**
 * Reads an arbitrary signed int from a buffer.
 */

function readInt(buffer) {
  var length = buffer.length;
  var positive = buffer[length - 1] < 0x80;
  var result = positive ? 0 : -1;
  var lossy = false; // Note: We can't use bit manipulation here, since that stops
  // working if the result won't fit in a 32-bit int.

  if (length < 7) {
    // Common case which can't possibly be lossy (because the result has
    // no more than 48 bits, and loss only happens with 54 or more).
    for (var i = length - 1; i >= 0; i--) {
      result = result * 0x100 + buffer[i];
    }
  } else {
    for (var _i = length - 1; _i >= 0; _i--) {
      var one = buffer[_i];
      result *= 0x100;

      if (isLossyToAdd(result, one)) {
        lossy = true;
      }

      result += one;
    }
  }

  return {
    value: result,
    lossy: lossy
  };
}
/**
 * Reads an arbitrary unsigned int from a buffer.
 */

function readUInt(buffer) {
  var length = buffer.length;
  var result = 0;
  var lossy = false; // Note: See above in re bit manipulation.

  if (length < 7) {
    // Common case which can't possibly be lossy (see above).
    for (var i = length - 1; i >= 0; i--) {
      result = result * 0x100 + buffer[i];
    }
  } else {
    for (var _i2 = length - 1; _i2 >= 0; _i2--) {
      var one = buffer[_i2];
      result *= 0x100;

      if (isLossyToAdd(result, one)) {
        lossy = true;
      }

      result += one;
    }
  }

  return {
    value: result,
    lossy: lossy
  };
}
/**
 * Writes a little-endian 64-bit signed int into a buffer.
 */

function writeInt64(value, buffer) {
  if (value < MIN_EXACT_INT64 || value > MAX_EXACT_INT64) {
    throw new Error("Value out of range.");
  }

  if (value < 0) {
    value += BIT_64;
  }

  writeUInt64(value, buffer);
}
/**
 * Writes a little-endian 64-bit unsigned int into a buffer.
 */

function writeUInt64(value, buffer) {
  if (value < 0 || value > MAX_EXACT_UINT64) {
    throw new Error("Value out of range.");
  }

  var lowWord = value % BIT_32;
  var highWord = Math.floor(value / BIT_32);
  buffer[0] = lowWord & 0xff;
  buffer[1] = lowWord >> 8 & 0xff;
  buffer[2] = lowWord >> 16 & 0xff;
  buffer[3] = lowWord >> 24 & 0xff;
  buffer[4] = highWord & 0xff;
  buffer[5] = highWord >> 8 & 0xff;
  buffer[6] = highWord >> 16 & 0xff;
  buffer[7] = highWord >> 24 & 0xff;
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/leb128/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@webassemblyjs/leb128/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_NUMBER_OF_BYTE_U32: () => (/* binding */ MAX_NUMBER_OF_BYTE_U32),
/* harmony export */   MAX_NUMBER_OF_BYTE_U64: () => (/* binding */ MAX_NUMBER_OF_BYTE_U64),
/* harmony export */   decodeInt32: () => (/* binding */ decodeInt32),
/* harmony export */   decodeInt64: () => (/* binding */ decodeInt64),
/* harmony export */   decodeUInt32: () => (/* binding */ decodeUInt32),
/* harmony export */   decodeUInt64: () => (/* binding */ decodeUInt64),
/* harmony export */   encodeI32: () => (/* binding */ encodeI32),
/* harmony export */   encodeI64: () => (/* binding */ encodeI64),
/* harmony export */   encodeU32: () => (/* binding */ encodeU32)
/* harmony export */ });
/* harmony import */ var _leb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leb */ "./node_modules/@webassemblyjs/leb128/esm/leb.js");

/**
 * According to https://webassembly.github.io/spec/core/binary/values.html#binary-int
 * max = ceil(32/7)
 */

var MAX_NUMBER_OF_BYTE_U32 = 5;
/**
 * According to https://webassembly.github.io/spec/core/binary/values.html#binary-int
 * max = ceil(64/7)
 */

var MAX_NUMBER_OF_BYTE_U64 = 10;
function decodeInt64(encodedBuffer, index) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__["default"].decodeInt64(encodedBuffer, index);
}
function decodeUInt64(encodedBuffer, index) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__["default"].decodeUInt64(encodedBuffer, index);
}
function decodeInt32(encodedBuffer, index) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__["default"].decodeInt32(encodedBuffer, index);
}
function decodeUInt32(encodedBuffer, index) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__["default"].decodeUInt32(encodedBuffer, index);
}
function encodeU32(v) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__["default"].encodeUInt32(v);
}
function encodeI32(v) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__["default"].encodeInt32(v);
}
function encodeI64(v) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__["default"].encodeInt64(v);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/leb128/esm/leb.js":
/*!*******************************************************!*\
  !*** ./node_modules/@webassemblyjs/leb128/esm/leb.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _xtuc_long__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xtuc/long */ "./node_modules/@xtuc/long/src/long.js");
/* harmony import */ var _xtuc_long__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xtuc_long__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bits */ "./node_modules/@webassemblyjs/leb128/esm/bits.js");
/* harmony import */ var _bufs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bufs */ "./node_modules/@webassemblyjs/leb128/esm/bufs.js");
// Copyright 2012 The Obvious Corporation.

/*
 * leb: LEB128 utilities.
 */

/*
 * Modules used
 */





/*
 * Module variables
 */

/** The minimum possible 32-bit signed int. */

var MIN_INT32 = -0x80000000;
/** The maximum possible 32-bit signed int. */

var MAX_INT32 = 0x7fffffff;
/** The maximum possible 32-bit unsigned int. */

var MAX_UINT32 = 0xffffffff;
/** The minimum possible 64-bit signed int. */
// const MIN_INT64 = -0x8000000000000000;

/**
 * The maximum possible 64-bit signed int that is representable as a
 * JavaScript number.
 */
// const MAX_INT64 = 0x7ffffffffffffc00;

/**
 * The maximum possible 64-bit unsigned int that is representable as a
 * JavaScript number.
 */
// const MAX_UINT64 = 0xfffffffffffff800;

/*
 * Helper functions
 */

/**
 * Determines the number of bits required to encode the number
 * represented in the given buffer as a signed value. The buffer is
 * taken to represent a signed number in little-endian form.
 *
 * The number of bits to encode is the (zero-based) bit number of the
 * highest-order non-sign-matching bit, plus two. For example:
 *
 *   11111011 01110101
 *   high          low
 *
 * The sign bit here is 1 (that is, it's a negative number). The highest
 * bit number that doesn't match the sign is bit #10 (where the lowest-order
 * bit is bit #0). So, we have to encode at least 12 bits total.
 *
 * As a special degenerate case, the numbers 0 and -1 each require just one bit.
 */

function signedBitCount(buffer) {
  return _bits__WEBPACK_IMPORTED_MODULE_1__.highOrder(_bits__WEBPACK_IMPORTED_MODULE_1__.getSign(buffer) ^ 1, buffer) + 2;
}
/**
 * Determines the number of bits required to encode the number
 * represented in the given buffer as an unsigned value. The buffer is
 * taken to represent an unsigned number in little-endian form.
 *
 * The number of bits to encode is the (zero-based) bit number of the
 * highest-order 1 bit, plus one. For example:
 *
 *   00011000 01010011
 *   high          low
 *
 * The highest-order 1 bit here is bit #12 (where the lowest-order bit
 * is bit #0). So, we have to encode at least 13 bits total.
 *
 * As a special degenerate case, the number 0 requires 1 bit.
 */


function unsignedBitCount(buffer) {
  var result = _bits__WEBPACK_IMPORTED_MODULE_1__.highOrder(1, buffer) + 1;
  return result ? result : 1;
}
/**
 * Common encoder for both signed and unsigned ints. This takes a
 * bigint-ish buffer, returning an LEB128-encoded buffer.
 */


function encodeBufferCommon(buffer, signed) {
  var signBit;
  var bitCount;

  if (signed) {
    signBit = _bits__WEBPACK_IMPORTED_MODULE_1__.getSign(buffer);
    bitCount = signedBitCount(buffer);
  } else {
    signBit = 0;
    bitCount = unsignedBitCount(buffer);
  }

  var byteCount = Math.ceil(bitCount / 7);
  var result = _bufs__WEBPACK_IMPORTED_MODULE_2__.alloc(byteCount);

  for (var i = 0; i < byteCount; i++) {
    var payload = _bits__WEBPACK_IMPORTED_MODULE_1__.extract(buffer, i * 7, 7, signBit);
    result[i] = payload | 0x80;
  } // Mask off the top bit of the last byte, to indicate the end of the
  // encoding.


  result[byteCount - 1] &= 0x7f;
  return result;
}
/**
 * Gets the byte-length of the value encoded in the given buffer at
 * the given index.
 */


function encodedLength(encodedBuffer, index) {
  var result = 0;

  while (encodedBuffer[index + result] >= 0x80) {
    result++;
  }

  result++; // to account for the last byte

  if (index + result > encodedBuffer.length) {// FIXME(sven): seems to cause false positives
    // throw new Error("integer representation too long");
  }

  return result;
}
/**
 * Common decoder for both signed and unsigned ints. This takes an
 * LEB128-encoded buffer, returning a bigint-ish buffer.
 */


function decodeBufferCommon(encodedBuffer, index, signed) {
  index = index === undefined ? 0 : index;
  var length = encodedLength(encodedBuffer, index);
  var bitLength = length * 7;
  var byteLength = Math.ceil(bitLength / 8);
  var result = _bufs__WEBPACK_IMPORTED_MODULE_2__.alloc(byteLength);
  var outIndex = 0;

  while (length > 0) {
    _bits__WEBPACK_IMPORTED_MODULE_1__.inject(result, outIndex, 7, encodedBuffer[index]);
    outIndex += 7;
    index++;
    length--;
  }

  var signBit;
  var signByte;

  if (signed) {
    // Sign-extend the last byte.
    var lastByte = result[byteLength - 1];
    var endBit = outIndex % 8;

    if (endBit !== 0) {
      var shift = 32 - endBit; // 32 because JS bit ops work on 32-bit ints.

      lastByte = result[byteLength - 1] = lastByte << shift >> shift & 0xff;
    }

    signBit = lastByte >> 7;
    signByte = signBit * 0xff;
  } else {
    signBit = 0;
    signByte = 0;
  } // Slice off any superfluous bytes, that is, ones that add no meaningful
  // bits (because the value would be the same if they were removed).


  while (byteLength > 1 && result[byteLength - 1] === signByte && (!signed || result[byteLength - 2] >> 7 === signBit)) {
    byteLength--;
  }

  result = _bufs__WEBPACK_IMPORTED_MODULE_2__.resize(result, byteLength);
  return {
    value: result,
    nextIndex: index
  };
}
/*
 * Exported bindings
 */


function encodeIntBuffer(buffer) {
  return encodeBufferCommon(buffer, true);
}

function decodeIntBuffer(encodedBuffer, index) {
  return decodeBufferCommon(encodedBuffer, index, true);
}

function encodeInt32(num) {
  var buf = new Uint8Array(4);
  buf[0] = num & 0xff;
  buf[1] = num >> 8 & 0xff;
  buf[2] = num >> 16 & 0xff;
  buf[3] = num >> 24 & 0xff;
  var result = encodeIntBuffer(buf);
  return result;
}

function decodeInt32(encodedBuffer, index) {
  var result = decodeIntBuffer(encodedBuffer, index);
  var parsed = _bufs__WEBPACK_IMPORTED_MODULE_2__.readInt(result.value);
  var value = parsed.value;
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(result.value);

  if (value < MIN_INT32 || value > MAX_INT32) {
    throw new Error("integer too large");
  }

  return {
    value: value,
    nextIndex: result.nextIndex
  };
}

function encodeInt64(num) {
  var buf = _bufs__WEBPACK_IMPORTED_MODULE_2__.alloc(8);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.writeInt64(num, buf);
  var result = encodeIntBuffer(buf);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(buf);
  return result;
}

function decodeInt64(encodedBuffer, index) {
  var result = decodeIntBuffer(encodedBuffer, index); // sign-extend if necessary

  var length = result.value.length;

  if (result.value[length - 1] >> 7) {
    result.value = _bufs__WEBPACK_IMPORTED_MODULE_2__.resize(result.value, 8);
    result.value.fill(255, length);
  }

  var value = _xtuc_long__WEBPACK_IMPORTED_MODULE_0___default().fromBytesLE(result.value, false);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(result.value);
  return {
    value: value,
    nextIndex: result.nextIndex,
    lossy: false
  };
}

function encodeUIntBuffer(buffer) {
  return encodeBufferCommon(buffer, false);
}

function decodeUIntBuffer(encodedBuffer, index) {
  return decodeBufferCommon(encodedBuffer, index, false);
}

function encodeUInt32(num) {
  var buf = new Uint8Array(4);
  buf[0] = num & 0xff;
  buf[1] = num >> 8 & 0xff;
  buf[2] = num >> 16 & 0xff;
  buf[3] = num >> 24 & 0xff;
  var result = encodeUIntBuffer(buf);
  return result;
}

function decodeUInt32(encodedBuffer, index) {
  var result = decodeUIntBuffer(encodedBuffer, index);
  var parsed = _bufs__WEBPACK_IMPORTED_MODULE_2__.readUInt(result.value);
  var value = parsed.value;
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(result.value);

  if (value > MAX_UINT32) {
    throw new Error("integer too large");
  }

  return {
    value: value,
    nextIndex: result.nextIndex
  };
}

function encodeUInt64(num) {
  var buf = _bufs__WEBPACK_IMPORTED_MODULE_2__.alloc(8);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.writeUInt64(num, buf);
  var result = encodeUIntBuffer(buf);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(buf);
  return result;
}

function decodeUInt64(encodedBuffer, index) {
  var result = decodeUIntBuffer(encodedBuffer, index);
  var value = _xtuc_long__WEBPACK_IMPORTED_MODULE_0___default().fromBytesLE(result.value, true);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(result.value);
  return {
    value: value,
    nextIndex: result.nextIndex,
    lossy: false
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  decodeInt32: decodeInt32,
  decodeInt64: decodeInt64,
  decodeIntBuffer: decodeIntBuffer,
  decodeUInt32: decodeUInt32,
  decodeUInt64: decodeUInt64,
  decodeUIntBuffer: decodeUIntBuffer,
  encodeInt32: encodeInt32,
  encodeInt64: encodeInt64,
  encodeIntBuffer: encodeIntBuffer,
  encodeUInt32: encodeUInt32,
  encodeUInt64: encodeUInt64,
  encodeUIntBuffer: encodeUIntBuffer
});

/***/ }),

/***/ "./node_modules/@webassemblyjs/utf8/esm/decoder.js":
/*!*********************************************************!*\
  !*** ./node_modules/@webassemblyjs/utf8/esm/decoder.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decode: () => (/* binding */ decode)
/* harmony export */ });
function con(b) {
  if ((b & 0xc0) === 0x80) {
    return b & 0x3f;
  } else {
    throw new Error("invalid UTF-8 encoding");
  }
}

function code(min, n) {
  if (n < min || 0xd800 <= n && n < 0xe000 || n >= 0x10000) {
    throw new Error("invalid UTF-8 encoding");
  } else {
    return n;
  }
}

function decode(bytes) {
  return _decode(bytes).map(function (x) {
    return String.fromCharCode(x);
  }).join("");
}

function _decode(bytes) {
  var result = [];

  while (bytes.length > 0) {
    var b1 = bytes[0];

    if (b1 < 0x80) {
      result.push(code(0x0, b1));
      bytes = bytes.slice(1);
      continue;
    }

    if (b1 < 0xc0) {
      throw new Error("invalid UTF-8 encoding");
    }

    var b2 = bytes[1];

    if (b1 < 0xe0) {
      result.push(code(0x80, ((b1 & 0x1f) << 6) + con(b2)));
      bytes = bytes.slice(2);
      continue;
    }

    var b3 = bytes[2];

    if (b1 < 0xf0) {
      result.push(code(0x800, ((b1 & 0x0f) << 12) + (con(b2) << 6) + con(b3)));
      bytes = bytes.slice(3);
      continue;
    }

    var b4 = bytes[3];

    if (b1 < 0xf8) {
      result.push(code(0x10000, (((b1 & 0x07) << 18) + con(b2) << 12) + (con(b3) << 6) + con(b4)));
      bytes = bytes.slice(4);
      continue;
    }

    throw new Error("invalid UTF-8 encoding");
  }

  return result;
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/utf8/esm/encoder.js":
/*!*********************************************************!*\
  !*** ./node_modules/@webassemblyjs/utf8/esm/encoder.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encode: () => (/* binding */ encode)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function con(n) {
  return 0x80 | n & 0x3f;
}

function encode(str) {
  var arr = str.split("").map(function (x) {
    return x.charCodeAt(0);
  });
  return _encode(arr);
}

function _encode(arr) {
  if (arr.length === 0) {
    return [];
  }

  var _arr = _toArray(arr),
      n = _arr[0],
      ns = _arr.slice(1);

  if (n < 0) {
    throw new Error("utf8");
  }

  if (n < 0x80) {
    return [n].concat(_toConsumableArray(_encode(ns)));
  }

  if (n < 0x800) {
    return [0xc0 | n >>> 6, con(n)].concat(_toConsumableArray(_encode(ns)));
  }

  if (n < 0x10000) {
    return [0xe0 | n >>> 12, con(n >>> 6), con(n)].concat(_toConsumableArray(_encode(ns)));
  }

  if (n < 0x110000) {
    return [0xf0 | n >>> 18, con(n >>> 12), con(n >>> 6), con(n)].concat(_toConsumableArray(_encode(ns)));
  }

  throw new Error("utf8");
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/utf8/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@webassemblyjs/utf8/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decode: () => (/* reexport safe */ _decoder__WEBPACK_IMPORTED_MODULE_0__.decode),
/* harmony export */   encode: () => (/* reexport safe */ _encoder__WEBPACK_IMPORTED_MODULE_1__.encode)
/* harmony export */ });
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./node_modules/@webassemblyjs/utf8/esm/decoder.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encoder */ "./node_modules/@webassemblyjs/utf8/esm/encoder.js");



/***/ }),

/***/ "./node_modules/@webassemblyjs/wasm-parser/lib/decoder.js":
/*!****************************************************************!*\
  !*** ./node_modules/@webassemblyjs/wasm-parser/lib/decoder.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.decode = decode;

var _helperApiError = __webpack_require__(/*! @webassemblyjs/helper-api-error */ "./node_modules/@webassemblyjs/helper-api-error/esm/index.js");

var ieee754 = _interopRequireWildcard(__webpack_require__(/*! @webassemblyjs/ieee754 */ "./node_modules/@webassemblyjs/ieee754/esm/index.js"));

var utf8 = _interopRequireWildcard(__webpack_require__(/*! @webassemblyjs/utf8 */ "./node_modules/@webassemblyjs/utf8/esm/index.js"));

var t = _interopRequireWildcard(__webpack_require__(/*! @webassemblyjs/ast */ "./node_modules/@webassemblyjs/ast/esm/index.js"));

var _leb = __webpack_require__(/*! @webassemblyjs/leb128 */ "./node_modules/@webassemblyjs/leb128/esm/index.js");

var _helperWasmBytecode = _interopRequireDefault(__webpack_require__(/*! @webassemblyjs/helper-wasm-bytecode */ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function toHex(n) {
  return "0x" + Number(n).toString(16);
}

function byteArrayEq(l, r) {
  if (l.length !== r.length) {
    return false;
  }

  for (var i = 0; i < l.length; i++) {
    if (l[i] !== r[i]) {
      return false;
    }
  }

  return true;
}

function decode(ab, opts) {
  var buf = new Uint8Array(ab);
  var getUniqueName = t.getUniqueNameGenerator();
  var offset = 0;

  function getPosition() {
    return {
      line: -1,
      column: offset
    };
  }

  function dump(b, msg) {
    if (opts.dump === false) return;
    var pad = "\t\t\t\t\t\t\t\t\t\t";
    var str = "";

    if (b.length < 5) {
      str = b.map(toHex).join(" ");
    } else {
      str = "...";
    }

    console.log(toHex(offset) + ":\t", str, pad, ";", msg);
  }

  function dumpSep(msg) {
    if (opts.dump === false) return;
    console.log(";", msg);
  }
  /**
   * TODO(sven): we can atually use a same structure
   * we are adding incrementally new features
   */


  var state = {
    elementsInFuncSection: [],
    elementsInExportSection: [],
    elementsInCodeSection: [],

    /**
     * Decode memory from:
     * - Memory section
     */
    memoriesInModule: [],

    /**
     * Decoded types from:
     * - Type section
     */
    typesInModule: [],

    /**
     * Decoded functions from:
     * - Function section
     * - Import section
     */
    functionsInModule: [],

    /**
     * Decoded tables from:
     * - Table section
     */
    tablesInModule: [],

    /**
     * Decoded globals from:
     * - Global section
     */
    globalsInModule: []
  };

  function isEOF() {
    return offset >= buf.length;
  }

  function eatBytes(n) {
    offset = offset + n;
  }

  function readBytesAtOffset(_offset, numberOfBytes) {
    var arr = [];

    for (var i = 0; i < numberOfBytes; i++) {
      arr.push(buf[_offset + i]);
    }

    return arr;
  }

  function readBytes(numberOfBytes) {
    return readBytesAtOffset(offset, numberOfBytes);
  }

  function readF64() {
    var bytes = readBytes(ieee754.NUMBER_OF_BYTE_F64);
    var value = ieee754.decodeF64(bytes);

    if (Math.sign(value) * value === Infinity) {
      return {
        value: Math.sign(value),
        inf: true,
        nextIndex: ieee754.NUMBER_OF_BYTE_F64
      };
    }

    if (isNaN(value)) {
      var sign = bytes[bytes.length - 1] >> 7 ? -1 : 1;
      var mantissa = 0;

      for (var i = 0; i < bytes.length - 2; ++i) {
        mantissa += bytes[i] * Math.pow(256, i);
      }

      mantissa += bytes[bytes.length - 2] % 16 * Math.pow(256, bytes.length - 2);
      return {
        value: sign * mantissa,
        nan: true,
        nextIndex: ieee754.NUMBER_OF_BYTE_F64
      };
    }

    return {
      value: value,
      nextIndex: ieee754.NUMBER_OF_BYTE_F64
    };
  }

  function readF32() {
    var bytes = readBytes(ieee754.NUMBER_OF_BYTE_F32);
    var value = ieee754.decodeF32(bytes);

    if (Math.sign(value) * value === Infinity) {
      return {
        value: Math.sign(value),
        inf: true,
        nextIndex: ieee754.NUMBER_OF_BYTE_F32
      };
    }

    if (isNaN(value)) {
      var sign = bytes[bytes.length - 1] >> 7 ? -1 : 1;
      var mantissa = 0;

      for (var i = 0; i < bytes.length - 2; ++i) {
        mantissa += bytes[i] * Math.pow(256, i);
      }

      mantissa += bytes[bytes.length - 2] % 128 * Math.pow(256, bytes.length - 2);
      return {
        value: sign * mantissa,
        nan: true,
        nextIndex: ieee754.NUMBER_OF_BYTE_F32
      };
    }

    return {
      value: value,
      nextIndex: ieee754.NUMBER_OF_BYTE_F32
    };
  }

  function readUTF8String() {
    var lenu32 = readU32(); // Don't eat any bytes. Instead, peek ahead of the current offset using
    // readBytesAtOffset below. This keeps readUTF8String neutral with respect
    // to the current offset, just like the other readX functions.

    var strlen = lenu32.value;
    dump([strlen], "string length");
    var bytes = readBytesAtOffset(offset + lenu32.nextIndex, strlen);
    var value = utf8.decode(bytes);
    return {
      value: value,
      nextIndex: strlen + lenu32.nextIndex
    };
  }
  /**
   * Decode an unsigned 32bits integer
   *
   * The length will be handled by the leb librairy, we pass the max number of
   * byte.
   */


  function readU32() {
    var bytes = readBytes(_leb.MAX_NUMBER_OF_BYTE_U32);
    var buffer = new Uint8Array(bytes);
    return (0, _leb.decodeUInt32)(buffer);
  }

  function readVaruint32() {
    // where 32 bits = max 4 bytes
    var bytes = readBytes(4);
    var buffer = new Uint8Array(bytes);
    return (0, _leb.decodeUInt32)(buffer);
  }

  function readVaruint7() {
    // where 7 bits = max 1 bytes
    var bytes = readBytes(1);
    var buffer = new Uint8Array(bytes);
    return (0, _leb.decodeUInt32)(buffer);
  }
  /**
   * Decode a signed 32bits interger
   */


  function read32() {
    var bytes = readBytes(_leb.MAX_NUMBER_OF_BYTE_U32);
    var buffer = new Uint8Array(bytes);
    return (0, _leb.decodeInt32)(buffer);
  }
  /**
   * Decode a signed 64bits integer
   */


  function read64() {
    var bytes = readBytes(_leb.MAX_NUMBER_OF_BYTE_U64);
    var buffer = new Uint8Array(bytes);
    return (0, _leb.decodeInt64)(buffer);
  }

  function readU64() {
    var bytes = readBytes(_leb.MAX_NUMBER_OF_BYTE_U64);
    var buffer = new Uint8Array(bytes);
    return (0, _leb.decodeUInt64)(buffer);
  }

  function readByte() {
    return readBytes(1)[0];
  }

  function parseModuleHeader() {
    if (isEOF() === true || offset + 4 > buf.length) {
      throw new Error("unexpected end");
    }

    var header = readBytes(4);

    if (byteArrayEq(_helperWasmBytecode["default"].magicModuleHeader, header) === false) {
      throw new _helperApiError.CompileError("magic header not detected");
    }

    dump(header, "wasm magic header");
    eatBytes(4);
  }

  function parseVersion() {
    if (isEOF() === true || offset + 4 > buf.length) {
      throw new Error("unexpected end");
    }

    var version = readBytes(4);

    if (byteArrayEq(_helperWasmBytecode["default"].moduleVersion, version) === false) {
      throw new _helperApiError.CompileError("unknown binary version");
    }

    dump(version, "wasm version");
    eatBytes(4);
  }

  function parseVec(cast) {
    var u32 = readU32();
    var length = u32.value;
    eatBytes(u32.nextIndex);
    dump([length], "number");

    if (length === 0) {
      return [];
    }

    var elements = [];

    for (var i = 0; i < length; i++) {
      var _byte = readByte();

      eatBytes(1);
      var value = cast(_byte);
      dump([_byte], value);

      if (typeof value === "undefined") {
        throw new _helperApiError.CompileError("Internal failure: parseVec could not cast the value");
      }

      elements.push(value);
    }

    return elements;
  } // Type section
  // https://webassembly.github.io/spec/binary/modules.html#binary-typesec


  function parseTypeSection(numberOfTypes) {
    var typeInstructionNodes = [];
    dump([numberOfTypes], "num types");

    for (var i = 0; i < numberOfTypes; i++) {
      var _startLoc = getPosition();

      dumpSep("type " + i);
      var type = readByte();
      eatBytes(1);

      if (type == _helperWasmBytecode["default"].types.func) {
        dump([type], "func");
        var paramValtypes = parseVec(function (b) {
          var valtype = _helperWasmBytecode["default"].valtypes[b];

          if (valtype === undefined) {
            throw new Error("unexpected value type ".concat(b));
          }

          return valtype;
        });
        var params = paramValtypes.map(function (v) {
          return t.funcParam(
          /*valtype*/
          v);
        });
        var result = parseVec(function (b) {
          return _helperWasmBytecode["default"].valtypes[b];
        });
        typeInstructionNodes.push(function () {
          var endLoc = getPosition();
          return t.withLoc(t.typeInstruction(undefined, t.signature(params, result)), endLoc, _startLoc);
        }());
        state.typesInModule.push({
          params: params,
          result: result
        });
      } else {
        throw new Error("Unsupported type: " + toHex(type));
      }
    }

    return typeInstructionNodes;
  } // Import section
  // https://webassembly.github.io/spec/binary/modules.html#binary-importsec


  function parseImportSection(numberOfImports) {
    var imports = [];

    for (var i = 0; i < numberOfImports; i++) {
      dumpSep("import header " + i);

      var _startLoc2 = getPosition();
      /**
       * Module name
       */


      var moduleName = readUTF8String();
      eatBytes(moduleName.nextIndex);
      dump([], "module name (".concat(moduleName.value, ")"));
      /**
       * Name
       */

      var name = readUTF8String();
      eatBytes(name.nextIndex);
      dump([], "name (".concat(name.value, ")"));
      /**
       * Import descr
       */

      var descrTypeByte = readByte();
      eatBytes(1);
      var descrType = _helperWasmBytecode["default"].importTypes[descrTypeByte];
      dump([descrTypeByte], "import kind");

      if (typeof descrType === "undefined") {
        throw new _helperApiError.CompileError("Unknown import description type: " + toHex(descrTypeByte));
      }

      var importDescr = void 0;

      if (descrType === "func") {
        var indexU32 = readU32();
        var typeindex = indexU32.value;
        eatBytes(indexU32.nextIndex);
        dump([typeindex], "type index");
        var signature = state.typesInModule[typeindex];

        if (typeof signature === "undefined") {
          throw new _helperApiError.CompileError("function signature not found (".concat(typeindex, ")"));
        }

        var id = getUniqueName("func");
        importDescr = t.funcImportDescr(id, t.signature(signature.params, signature.result));
        state.functionsInModule.push({
          id: t.identifier(name.value),
          signature: signature,
          isExternal: true
        });
      } else if (descrType === "global") {
        importDescr = parseGlobalType();
        var globalNode = t.global(importDescr, []);
        state.globalsInModule.push(globalNode);
      } else if (descrType === "table") {
        importDescr = parseTableType(i);
      } else if (descrType === "memory") {
        var memoryNode = parseMemoryType(0);
        state.memoriesInModule.push(memoryNode);
        importDescr = memoryNode;
      } else {
        throw new _helperApiError.CompileError("Unsupported import of type: " + descrType);
      }

      imports.push(function () {
        var endLoc = getPosition();
        return t.withLoc(t.moduleImport(moduleName.value, name.value, importDescr), endLoc, _startLoc2);
      }());
    }

    return imports;
  } // Function section
  // https://webassembly.github.io/spec/binary/modules.html#function-section


  function parseFuncSection(numberOfFunctions) {
    dump([numberOfFunctions], "num funcs");

    for (var i = 0; i < numberOfFunctions; i++) {
      var indexU32 = readU32();
      var typeindex = indexU32.value;
      eatBytes(indexU32.nextIndex);
      dump([typeindex], "type index");
      var signature = state.typesInModule[typeindex];

      if (typeof signature === "undefined") {
        throw new _helperApiError.CompileError("function signature not found (".concat(typeindex, ")"));
      } // preserve anonymous, a name might be resolved later


      var id = t.withRaw(t.identifier(getUniqueName("func")), "");
      state.functionsInModule.push({
        id: id,
        signature: signature,
        isExternal: false
      });
    }
  } // Export section
  // https://webassembly.github.io/spec/binary/modules.html#export-section


  function parseExportSection(numberOfExport) {
    dump([numberOfExport], "num exports"); // Parse vector of exports

    for (var i = 0; i < numberOfExport; i++) {
      var _startLoc3 = getPosition();
      /**
       * Name
       */


      var name = readUTF8String();
      eatBytes(name.nextIndex);
      dump([], "export name (".concat(name.value, ")"));
      /**
       * exportdescr
       */

      var typeIndex = readByte();
      eatBytes(1);
      dump([typeIndex], "export kind");
      var indexu32 = readU32();
      var index = indexu32.value;
      eatBytes(indexu32.nextIndex);
      dump([index], "export index");
      var id = void 0,
          signature = void 0;

      if (_helperWasmBytecode["default"].exportTypes[typeIndex] === "Func") {
        var func = state.functionsInModule[index];

        if (typeof func === "undefined") {
          throw new _helperApiError.CompileError("unknown function (".concat(index, ")"));
        }

        id = t.numberLiteralFromRaw(index, String(index));
        signature = func.signature;
      } else if (_helperWasmBytecode["default"].exportTypes[typeIndex] === "Table") {
        var table = state.tablesInModule[index];

        if (typeof table === "undefined") {
          throw new _helperApiError.CompileError("unknown table ".concat(index));
        }

        id = t.numberLiteralFromRaw(index, String(index));
        signature = null;
      } else if (_helperWasmBytecode["default"].exportTypes[typeIndex] === "Memory") {
        var memNode = state.memoriesInModule[index];

        if (typeof memNode === "undefined") {
          throw new _helperApiError.CompileError("unknown memory ".concat(index));
        }

        id = t.numberLiteralFromRaw(index, String(index));
        signature = null;
      } else if (_helperWasmBytecode["default"].exportTypes[typeIndex] === "Global") {
        var global = state.globalsInModule[index];

        if (typeof global === "undefined") {
          throw new _helperApiError.CompileError("unknown global ".concat(index));
        }

        id = t.numberLiteralFromRaw(index, String(index));
        signature = null;
      } else {
        console.warn("Unsupported export type: " + toHex(typeIndex));
        return;
      }

      var endLoc = getPosition();
      state.elementsInExportSection.push({
        name: name.value,
        type: _helperWasmBytecode["default"].exportTypes[typeIndex],
        signature: signature,
        id: id,
        index: index,
        endLoc: endLoc,
        startLoc: _startLoc3
      });
    }
  } // Code section
  // https://webassembly.github.io/spec/binary/modules.html#code-section


  function parseCodeSection(numberOfFuncs) {
    dump([numberOfFuncs], "number functions"); // Parse vector of function

    for (var i = 0; i < numberOfFuncs; i++) {
      var _startLoc4 = getPosition();

      dumpSep("function body " + i); // the u32 size of the function code in bytes
      // Ignore it for now

      var bodySizeU32 = readU32();
      eatBytes(bodySizeU32.nextIndex);
      dump([bodySizeU32.value], "function body size");
      var code = []; // Parse locals

      var funcLocalNumU32 = readU32();
      var funcLocalNum = funcLocalNumU32.value;
      eatBytes(funcLocalNumU32.nextIndex);
      dump([funcLocalNum], "num locals");
      var locals = [];

      for (var _i = 0; _i < funcLocalNum; _i++) {
        var _startLoc5 = getPosition();

        var localCountU32 = readU32();
        var localCount = localCountU32.value;
        eatBytes(localCountU32.nextIndex);
        dump([localCount], "num local");
        var valtypeByte = readByte();
        eatBytes(1);
        var type = _helperWasmBytecode["default"].valtypes[valtypeByte];
        var args = [];

        for (var _i2 = 0; _i2 < localCount; _i2++) {
          args.push(t.valtypeLiteral(type));
        }

        var localNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.instruction("local", args), endLoc, _startLoc5);
        }();

        locals.push(localNode);
        dump([valtypeByte], type);

        if (typeof type === "undefined") {
          throw new _helperApiError.CompileError("Unexpected valtype: " + toHex(valtypeByte));
        }
      }

      code.push.apply(code, locals); // Decode instructions until the end

      parseInstructionBlock(code);
      var endLoc = getPosition();
      state.elementsInCodeSection.push({
        code: code,
        locals: locals,
        endLoc: endLoc,
        startLoc: _startLoc4,
        bodySize: bodySizeU32.value
      });
    }
  }

  function parseInstructionBlock(code) {
    while (true) {
      var _startLoc6 = getPosition();

      var instructionAlreadyCreated = false;
      var instructionByte = readByte();
      eatBytes(1);

      if (instructionByte === 0xfe) {
        instructionByte = 0xfe00 + readByte();
        eatBytes(1);
      } // Table instructions
      // https://webassembly.github.io/spec/core/binary/instructions.html#table-instructions


      if (instructionByte === 0xfc) {
        instructionByte = 0xfc00 + readByte();
        eatBytes(1);
      }

      var instruction = _helperWasmBytecode["default"].symbolsByByte[instructionByte];

      if (typeof instruction === "undefined") {
        throw new _helperApiError.CompileError("Unexpected instruction: " + toHex(instructionByte));
      }

      if (instruction === "illegal") {
        throw new Error("tried to decode an illegal bytecode: ".concat(toHex(instructionByte)));
      }

      if (typeof instruction.object === "string") {
        dump([instructionByte], "".concat(instruction.object, ".").concat(instruction.name));
      } else {
        dump([instructionByte], instruction.name);
      }
      /**
       * End of the function
       */


      if (instruction.name === "end") {
        var node = function () {
          var endLoc = getPosition();
          return t.withLoc(t.instruction(instruction.name), endLoc, _startLoc6);
        }();

        code.push(node);
        break;
      }

      var args = [];
      var namedArgs = void 0;

      if (instruction.name === "loop") {
        var _startLoc7 = getPosition();

        var blocktype = parseBlockType();
        var instr = [];
        parseInstructionBlock(instr); // preserve anonymous

        var label = t.withRaw(t.identifier(getUniqueName("loop")), "");

        var loopNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.loopInstruction(label, blocktype, instr), endLoc, _startLoc7);
        }();

        code.push(loopNode);
        instructionAlreadyCreated = true;
      } else if (instruction.name === "if") {
        var _startLoc8 = getPosition();

        var _blocktype = parseBlockType();

        var testIndex = t.withRaw(t.identifier(getUniqueName("if")), "");
        var ifBody = [];
        parseInstructionBlock(ifBody); // Defaults to no alternate

        var elseIndex = 0;

        for (elseIndex = 0; elseIndex < ifBody.length; ++elseIndex) {
          var _instr = ifBody[elseIndex];

          if (_instr.type === "Instr" && _instr.id === "else") {
            break;
          }
        }

        var consequentInstr = ifBody.slice(0, elseIndex);
        var alternate = ifBody.slice(elseIndex + 1); // wast sugar

        var testInstrs = [];

        var ifNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.ifInstruction(testIndex, testInstrs, _blocktype, consequentInstr, alternate), endLoc, _startLoc8);
        }();

        code.push(ifNode);
        instructionAlreadyCreated = true;
      } else if (instruction.name === "block") {
        var _startLoc9 = getPosition();

        var _blocktype2 = parseBlockType();

        var _instr2 = [];
        parseInstructionBlock(_instr2); // preserve anonymous

        var _label = t.withRaw(t.identifier(getUniqueName("block")), "");

        var blockNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.blockInstruction(_label, _instr2, _blocktype2), endLoc, _startLoc9);
        }();

        code.push(blockNode);
        instructionAlreadyCreated = true;
      } else if (instruction.name === "call") {
        var indexu32 = readU32();
        var index = indexu32.value;
        eatBytes(indexu32.nextIndex);
        dump([index], "index");

        var callNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.callInstruction(t.indexLiteral(index)), endLoc, _startLoc6);
        }();

        code.push(callNode);
        instructionAlreadyCreated = true;
      } else if (instruction.name === "call_indirect") {
        var _startLoc10 = getPosition();

        var indexU32 = readU32();
        var typeindex = indexU32.value;
        eatBytes(indexU32.nextIndex);
        dump([typeindex], "type index");
        var signature = state.typesInModule[typeindex];

        if (typeof signature === "undefined") {
          throw new _helperApiError.CompileError("call_indirect signature not found (".concat(typeindex, ")"));
        }

        var _callNode = t.callIndirectInstruction(t.signature(signature.params, signature.result), []);

        var flagU32 = readU32();
        var flag = flagU32.value; // 0x00 - reserved byte

        eatBytes(flagU32.nextIndex);

        if (flag !== 0) {
          throw new _helperApiError.CompileError("zero flag expected");
        }

        code.push(function () {
          var endLoc = getPosition();
          return t.withLoc(_callNode, endLoc, _startLoc10);
        }());
        instructionAlreadyCreated = true;
      } else if (instruction.name === "br_table") {
        var indicesu32 = readU32();
        var indices = indicesu32.value;
        eatBytes(indicesu32.nextIndex);
        dump([indices], "num indices");

        for (var i = 0; i <= indices; i++) {
          var _indexu = readU32();

          var _index = _indexu.value;
          eatBytes(_indexu.nextIndex);
          dump([_index], "index");
          args.push(t.numberLiteralFromRaw(_indexu.value.toString(), "u32"));
        }
      } else if (instructionByte >= 0x28 && instructionByte <= 0x40) {
        /**
         * Memory instructions
         */
        if (instruction.name === "grow_memory" || instruction.name === "current_memory") {
          var _indexU = readU32();

          var _index2 = _indexU.value;
          eatBytes(_indexU.nextIndex);

          if (_index2 !== 0) {
            throw new Error("zero flag expected");
          }

          dump([_index2], "index");
        } else {
          var aligun32 = readU32();
          var align = aligun32.value;
          eatBytes(aligun32.nextIndex);
          dump([align], "align");
          var offsetu32 = readU32();
          var _offset2 = offsetu32.value;
          eatBytes(offsetu32.nextIndex);
          dump([_offset2], "offset");
          if (namedArgs === undefined) namedArgs = {};
          namedArgs.offset = t.numberLiteralFromRaw(_offset2);
        }
      } else if (instructionByte >= 0x41 && instructionByte <= 0x44) {
        /**
         * Numeric instructions
         */
        if (instruction.object === "i32") {
          var value32 = read32();
          var value = value32.value;
          eatBytes(value32.nextIndex);
          dump([value], "i32 value");
          args.push(t.numberLiteralFromRaw(value));
        }

        if (instruction.object === "u32") {
          var valueu32 = readU32();
          var _value = valueu32.value;
          eatBytes(valueu32.nextIndex);
          dump([_value], "u32 value");
          args.push(t.numberLiteralFromRaw(_value));
        }

        if (instruction.object === "i64") {
          var value64 = read64();
          var _value2 = value64.value;
          eatBytes(value64.nextIndex);
          dump([Number(_value2.toString())], "i64 value");
          var high = _value2.high,
              low = _value2.low;
          var _node = {
            type: "LongNumberLiteral",
            value: {
              high: high,
              low: low
            }
          };
          args.push(_node);
        }

        if (instruction.object === "u64") {
          var valueu64 = readU64();
          var _value3 = valueu64.value;
          eatBytes(valueu64.nextIndex);
          dump([Number(_value3.toString())], "u64 value");
          var _high = _value3.high,
              _low = _value3.low;
          var _node2 = {
            type: "LongNumberLiteral",
            value: {
              high: _high,
              low: _low
            }
          };
          args.push(_node2);
        }

        if (instruction.object === "f32") {
          var valuef32 = readF32();
          var _value4 = valuef32.value;
          eatBytes(valuef32.nextIndex);
          dump([_value4], "f32 value");
          args.push( // $FlowIgnore
          t.floatLiteral(_value4, valuef32.nan, valuef32.inf, String(_value4)));
        }

        if (instruction.object === "f64") {
          var valuef64 = readF64();
          var _value5 = valuef64.value;
          eatBytes(valuef64.nextIndex);
          dump([_value5], "f64 value");
          args.push( // $FlowIgnore
          t.floatLiteral(_value5, valuef64.nan, valuef64.inf, String(_value5)));
        }
      } else if (instructionByte >= 0xfe00 && instructionByte <= 0xfeff) {
        /**
         * Atomic memory instructions
         */
        var align32 = readU32();
        var _align = align32.value;
        eatBytes(align32.nextIndex);
        dump([_align], "align");

        var _offsetu = readU32();

        var _offset3 = _offsetu.value;
        eatBytes(_offsetu.nextIndex);
        dump([_offset3], "offset");
      } else {
        for (var _i3 = 0; _i3 < instruction.numberOfArgs; _i3++) {
          var u32 = readU32();
          eatBytes(u32.nextIndex);
          dump([u32.value], "argument " + _i3);
          args.push(t.numberLiteralFromRaw(u32.value));
        }
      }

      if (instructionAlreadyCreated === false) {
        if (typeof instruction.object === "string") {
          var _node3 = function () {
            var endLoc = getPosition();
            return t.withLoc(t.objectInstruction(instruction.name, instruction.object, args, namedArgs), endLoc, _startLoc6);
          }();

          code.push(_node3);
        } else {
          var _node4 = function () {
            var endLoc = getPosition();
            return t.withLoc(t.instruction(instruction.name, args, namedArgs), endLoc, _startLoc6);
          }();

          code.push(_node4);
        }
      }
    }
  } // https://webassembly.github.io/spec/core/binary/types.html#limits


  function parseLimits() {
    var limitType = readByte();
    eatBytes(1);
    var shared = limitType === 0x03;
    dump([limitType], "limit type" + (shared ? " (shared)" : ""));
    var min, max;

    if (limitType === 0x01 || limitType === 0x03 // shared limits
    ) {
      var u32min = readU32();
      min = parseInt(u32min.value);
      eatBytes(u32min.nextIndex);
      dump([min], "min");
      var u32max = readU32();
      max = parseInt(u32max.value);
      eatBytes(u32max.nextIndex);
      dump([max], "max");
    }

    if (limitType === 0x00) {
      var _u32min = readU32();

      min = parseInt(_u32min.value);
      eatBytes(_u32min.nextIndex);
      dump([min], "min");
    }

    return t.limit(min, max, shared);
  } // https://webassembly.github.io/spec/core/binary/types.html#binary-tabletype


  function parseTableType(index) {
    var name = t.withRaw(t.identifier(getUniqueName("table")), String(index));
    var elementTypeByte = readByte();
    eatBytes(1);
    dump([elementTypeByte], "element type");
    var elementType = _helperWasmBytecode["default"].tableTypes[elementTypeByte];

    if (typeof elementType === "undefined") {
      throw new _helperApiError.CompileError("Unknown element type in table: " + toHex(elementTypeByte));
    }

    var limits = parseLimits();
    return t.table(elementType, limits, name);
  } // https://webassembly.github.io/spec/binary/types.html#global-types


  function parseGlobalType() {
    var valtypeByte = readByte();
    eatBytes(1);
    var type = _helperWasmBytecode["default"].valtypes[valtypeByte];
    dump([valtypeByte], type);

    if (typeof type === "undefined") {
      throw new _helperApiError.CompileError("Unknown valtype: " + toHex(valtypeByte));
    }

    var globalTypeByte = readByte();
    eatBytes(1);
    var globalType = _helperWasmBytecode["default"].globalTypes[globalTypeByte];
    dump([globalTypeByte], "global type (".concat(globalType, ")"));

    if (typeof globalType === "undefined") {
      throw new _helperApiError.CompileError("Invalid mutability: " + toHex(globalTypeByte));
    }

    return t.globalType(type, globalType);
  } // function parseNameModule() {
  //   const lenu32 = readVaruint32();
  //   eatBytes(lenu32.nextIndex);
  //   console.log("len", lenu32);
  //   const strlen = lenu32.value;
  //   dump([strlen], "string length");
  //   const bytes = readBytes(strlen);
  //   eatBytes(strlen);
  //   const value = utf8.decode(bytes);
  //   return [t.moduleNameMetadata(value)];
  // }
  // this section contains an array of function names and indices


  function parseNameSectionFunctions() {
    var functionNames = [];
    var numberOfFunctionsu32 = readU32();
    var numbeOfFunctions = numberOfFunctionsu32.value;
    eatBytes(numberOfFunctionsu32.nextIndex);

    for (var i = 0; i < numbeOfFunctions; i++) {
      var indexu32 = readU32();
      var index = indexu32.value;
      eatBytes(indexu32.nextIndex);
      var name = readUTF8String();
      eatBytes(name.nextIndex);
      functionNames.push(t.functionNameMetadata(name.value, index));
    }

    return functionNames;
  }

  function parseNameSectionLocals() {
    var localNames = [];
    var numbeOfFunctionsu32 = readU32();
    var numbeOfFunctions = numbeOfFunctionsu32.value;
    eatBytes(numbeOfFunctionsu32.nextIndex);

    for (var i = 0; i < numbeOfFunctions; i++) {
      var functionIndexu32 = readU32();
      var functionIndex = functionIndexu32.value;
      eatBytes(functionIndexu32.nextIndex);
      var numLocalsu32 = readU32();
      var numLocals = numLocalsu32.value;
      eatBytes(numLocalsu32.nextIndex);

      for (var _i4 = 0; _i4 < numLocals; _i4++) {
        var localIndexu32 = readU32();
        var localIndex = localIndexu32.value;
        eatBytes(localIndexu32.nextIndex);
        var name = readUTF8String();
        eatBytes(name.nextIndex);
        localNames.push(t.localNameMetadata(name.value, localIndex, functionIndex));
      }
    }

    return localNames;
  } // this is a custom section used for name resolution
  // https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section


  function parseNameSection(remainingBytes) {
    var nameMetadata = [];
    var initialOffset = offset;

    while (offset - initialOffset < remainingBytes) {
      // name_type
      var sectionTypeByte = readVaruint7();
      eatBytes(sectionTypeByte.nextIndex); // name_payload_len

      var subSectionSizeInBytesu32 = readVaruint32();
      eatBytes(subSectionSizeInBytesu32.nextIndex);

      switch (sectionTypeByte.value) {
        // case 0: {
        // TODO(sven): re-enable that
        // Current status: it seems that when we decode the module's name
        // no name_payload_len is used.
        //
        // See https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section
        //
        // nameMetadata.push(...parseNameModule());
        // break;
        // }
        case 1:
          {
            nameMetadata.push.apply(nameMetadata, _toConsumableArray(parseNameSectionFunctions()));
            break;
          }

        case 2:
          {
            nameMetadata.push.apply(nameMetadata, _toConsumableArray(parseNameSectionLocals()));
            break;
          }

        default:
          {
            // skip unknown subsection
            eatBytes(subSectionSizeInBytesu32.value);
          }
      }
    }

    return nameMetadata;
  } // this is a custom section used for information about the producers
  // https://github.com/WebAssembly/tool-conventions/blob/master/ProducersSection.md


  function parseProducersSection() {
    var metadata = t.producersSectionMetadata([]); // field_count

    var sectionTypeByte = readVaruint32();
    eatBytes(sectionTypeByte.nextIndex);
    dump([sectionTypeByte.value], "num of producers");
    var fields = {
      language: [],
      "processed-by": [],
      sdk: []
    }; // fields

    for (var fieldI = 0; fieldI < sectionTypeByte.value; fieldI++) {
      // field_name
      var fieldName = readUTF8String();
      eatBytes(fieldName.nextIndex); // field_value_count

      var valueCount = readVaruint32();
      eatBytes(valueCount.nextIndex); // field_values

      for (var producerI = 0; producerI < valueCount.value; producerI++) {
        var producerName = readUTF8String();
        eatBytes(producerName.nextIndex);
        var producerVersion = readUTF8String();
        eatBytes(producerVersion.nextIndex);
        fields[fieldName.value].push(t.producerMetadataVersionedName(producerName.value, producerVersion.value));
      }

      metadata.producers.push(fields[fieldName.value]);
    }

    return metadata;
  }

  function parseGlobalSection(numberOfGlobals) {
    var globals = [];
    dump([numberOfGlobals], "num globals");

    for (var i = 0; i < numberOfGlobals; i++) {
      var _startLoc11 = getPosition();

      var globalType = parseGlobalType();
      /**
       * Global expressions
       */

      var init = [];
      parseInstructionBlock(init);

      var node = function () {
        var endLoc = getPosition();
        return t.withLoc(t.global(globalType, init), endLoc, _startLoc11);
      }();

      globals.push(node);
      state.globalsInModule.push(node);
    }

    return globals;
  }

  function parseElemSection(numberOfElements) {
    var elems = [];
    dump([numberOfElements], "num elements");

    for (var i = 0; i < numberOfElements; i++) {
      var _startLoc12 = getPosition();

      var tableindexu32 = readU32();
      var bitfield = tableindexu32.value;
      eatBytes(tableindexu32.nextIndex);
      dump([bitfield], "bitfield");

      if (bitfield === 0) {
        // Parse instructions
        var instr = [];
        parseInstructionBlock(instr); // Parse ( vector function index ) *

        var indicesu32 = readU32();
        var indices = indicesu32.value;
        eatBytes(indicesu32.nextIndex);
        dump([indices], "num indices");
        var indexValues = [];

        for (var _i5 = 0; _i5 < indices; _i5++) {
          var indexu32 = readU32();
          var index = indexu32.value;
          eatBytes(indexu32.nextIndex);
          dump([index], "index");
          indexValues.push(t.indexLiteral(index));
        }

        var elemNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.elem(t.indexLiteral(bitfield), instr, indexValues), endLoc, _startLoc12);
        }();

        elems.push(elemNode);
      } else if (bitfield === 1) {
        var elemKind = readByte();
        eatBytes(1);

        if (elemKind !== 0) {
          throw new Error("unexpected Elem kind: ".concat(toHex(elemKind)));
        } // Parse ( vector function index ) *


        var _indicesu = readU32();

        var _indices = _indicesu.value;
        eatBytes(_indicesu.nextIndex);
        dump([_indices], "num indices");
        var _indexValues = [];

        for (var _i6 = 0; _i6 < _indices; _i6++) {
          var _indexu2 = readU32();

          var _index3 = _indexu2.value;
          eatBytes(_indexu2.nextIndex);
          dump([_index3], "index");

          _indexValues.push(t.indexLiteral(_index3));
        } // TODO: emit a AST node, for now just make it parse.

      } else if (bitfield === 2) {
        var u32 = readU32();
        var tableidx = u32.value;
        eatBytes(u32.nextIndex);
        dump([tableidx], "tableidx"); // Parse instructions

        var _instr3 = [];
        parseInstructionBlock(_instr3);

        var _elemKind = readByte();

        eatBytes(1);

        if (_elemKind !== 0) {
          throw new Error("unexpected Elem kind: ".concat(toHex(_elemKind)));
        } // Parse ( vector function index ) *


        var _indicesu2 = readU32();

        var _indices2 = _indicesu2.value;
        eatBytes(_indicesu2.nextIndex);
        dump([_indices2], "num indices");
        var _indexValues2 = [];

        for (var _i7 = 0; _i7 < _indices2; _i7++) {
          var _indexu3 = readU32();

          var _index4 = _indexu3.value;
          eatBytes(_indexu3.nextIndex);
          dump([_index4], "index");

          _indexValues2.push(t.indexLiteral(_index4));
        }

        var _elemNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.elem(t.indexLiteral(bitfield), _instr3, _indexValues2), endLoc, _startLoc12);
        }();

        elems.push(_elemNode);
      } else if (bitfield === 3) {
        var _elemKind2 = readByte();

        eatBytes(1);

        if (_elemKind2 !== 0) {
          throw new Error("unexpected Elem kind: ".concat(toHex(_elemKind2)));
        } // Parse ( vector function index ) *


        var countU32 = readU32();
        var count = countU32.value;
        eatBytes(countU32.nextIndex);
        dump([count], "count");

        for (var _i8 = 0; _i8 < count; _i8++) {
          var _indexu4 = readU32();

          var _index5 = _indexu4.value;
          eatBytes(_indexu4.nextIndex);
          dump([_index5], "index");
        } // TODO: emit a AST node, for now just make it parse.

      } else if (bitfield === 4) {
        var expr = [];
        parseInstructionBlock(expr);

        var _countU = readU32();

        var _count = _countU.value;
        eatBytes(_countU.nextIndex);
        dump([_count], "count");

        for (var _i9 = 0; _i9 < _count; _i9++) {
          var code = [];
          parseInstructionBlock(code);
        } // TODO: emit a AST node, for now just make it parse.

      } else if (bitfield === 5) {
        var reftype = readByte();
        eatBytes(1);
        dump([reftype], "reftype");

        var _countU2 = readU32();

        var _count2 = _countU2.value;
        eatBytes(_countU2.nextIndex);
        dump([_count2], "count");

        for (var _i10 = 0; _i10 < _count2; _i10++) {
          var _code = [];
          parseInstructionBlock(_code);
        } // TODO: emit a AST node, for now just make it parse.

      } else if (bitfield === 7) {
        var _reftype = readByte();

        eatBytes(1);
        dump([_reftype], "reftype");

        var _countU3 = readU32();

        var _count3 = _countU3.value;
        eatBytes(_countU3.nextIndex);
        dump([_count3], "count");

        for (var _i11 = 0; _i11 < _count3; _i11++) {
          var _code2 = [];
          parseInstructionBlock(_code2);
        } // TODO: emit a AST node, for now just make it parse.

      } else {
        throw new Error("unexpected Elem with bitfield ".concat(toHex(bitfield)));
      }
    }

    return elems;
  } // https://webassembly.github.io/spec/core/binary/types.html#memory-types


  function parseMemoryType(i) {
    var limits = parseLimits();
    return t.memory(limits, t.indexLiteral(i));
  } // https://webassembly.github.io/spec/binary/modules.html#table-section


  function parseTableSection(numberOfElements) {
    var tables = [];
    dump([numberOfElements], "num elements");

    for (var i = 0; i < numberOfElements; i++) {
      var tablesNode = parseTableType(i);
      state.tablesInModule.push(tablesNode);
      tables.push(tablesNode);
    }

    return tables;
  } // https://webassembly.github.io/spec/binary/modules.html#memory-section


  function parseMemorySection(numberOfElements) {
    var memories = [];
    dump([numberOfElements], "num elements");

    for (var i = 0; i < numberOfElements; i++) {
      var memoryNode = parseMemoryType(i);
      state.memoriesInModule.push(memoryNode);
      memories.push(memoryNode);
    }

    return memories;
  } // https://webassembly.github.io/spec/binary/modules.html#binary-startsec


  function parseStartSection() {
    var startLoc = getPosition();
    var u32 = readU32();
    var startFuncIndex = u32.value;
    eatBytes(u32.nextIndex);
    dump([startFuncIndex], "index");
    return function () {
      var endLoc = getPosition();
      return t.withLoc(t.start(t.indexLiteral(startFuncIndex)), endLoc, startLoc);
    }();
  } // https://webassembly.github.io/spec/binary/modules.html#data-section


  function parseDataSection(numberOfElements) {
    var dataEntries = [];
    dump([numberOfElements], "num elements");

    for (var i = 0; i < numberOfElements; i++) {
      var memoryIndexu32 = readU32();
      var memoryIndex = memoryIndexu32.value;
      eatBytes(memoryIndexu32.nextIndex);
      dump([memoryIndex], "memory index");
      var instrs = [];
      parseInstructionBlock(instrs);
      var hasExtraInstrs = instrs.filter(function (i) {
        return i.id !== "end";
      }).length !== 1;

      if (hasExtraInstrs) {
        throw new _helperApiError.CompileError("data section offset must be a single instruction");
      }

      var bytes = parseVec(function (b) {
        return b;
      });
      dump([], "init");
      dataEntries.push(t.data(t.memIndexLiteral(memoryIndex), instrs[0], t.byteArray(bytes)));
    }

    return dataEntries;
  } // https://webassembly.github.io/spec/binary/modules.html#binary-section


  function parseSection(sectionIndex) {
    var sectionId = readByte();
    eatBytes(1);

    if (sectionId >= sectionIndex || sectionIndex === _helperWasmBytecode["default"].sections.custom) {
      sectionIndex = sectionId + 1;
    } else {
      if (sectionId !== _helperWasmBytecode["default"].sections.custom) throw new _helperApiError.CompileError("Unexpected section: " + toHex(sectionId));
    }

    var nextSectionIndex = sectionIndex;
    var startOffset = offset;
    var startLoc = getPosition();
    var u32 = readU32();
    var sectionSizeInBytes = u32.value;
    eatBytes(u32.nextIndex);

    var sectionSizeInBytesNode = function () {
      var endLoc = getPosition();
      return t.withLoc(t.numberLiteralFromRaw(sectionSizeInBytes), endLoc, startLoc);
    }();

    switch (sectionId) {
      case _helperWasmBytecode["default"].sections.type:
        {
          dumpSep("section Type");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc13 = getPosition();

          var _u = readU32();

          var numberOfTypes = _u.value;
          eatBytes(_u.nextIndex);
          var metadata = t.sectionMetadata("type", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfTypes), endLoc, _startLoc13);
          }());
          var nodes = parseTypeSection(numberOfTypes);
          return {
            nodes: nodes,
            metadata: metadata,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.table:
        {
          dumpSep("section Table");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc14 = getPosition();

          var _u2 = readU32();

          var numberOfTable = _u2.value;
          eatBytes(_u2.nextIndex);
          dump([numberOfTable], "num tables");

          var _metadata = t.sectionMetadata("table", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfTable), endLoc, _startLoc14);
          }());

          var _nodes = parseTableSection(numberOfTable);

          return {
            nodes: _nodes,
            metadata: _metadata,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections["import"]:
        {
          dumpSep("section Import");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc15 = getPosition();

          var numberOfImportsu32 = readU32();
          var numberOfImports = numberOfImportsu32.value;
          eatBytes(numberOfImportsu32.nextIndex);
          dump([numberOfImports], "number of imports");

          var _metadata2 = t.sectionMetadata("import", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfImports), endLoc, _startLoc15);
          }());

          var _nodes2 = parseImportSection(numberOfImports);

          return {
            nodes: _nodes2,
            metadata: _metadata2,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.func:
        {
          dumpSep("section Function");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc16 = getPosition();

          var numberOfFunctionsu32 = readU32();
          var numberOfFunctions = numberOfFunctionsu32.value;
          eatBytes(numberOfFunctionsu32.nextIndex);

          var _metadata3 = t.sectionMetadata("func", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfFunctions), endLoc, _startLoc16);
          }());

          parseFuncSection(numberOfFunctions);
          var _nodes3 = [];
          return {
            nodes: _nodes3,
            metadata: _metadata3,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections["export"]:
        {
          dumpSep("section Export");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc17 = getPosition();

          var _u3 = readU32();

          var numberOfExport = _u3.value;
          eatBytes(_u3.nextIndex);

          var _metadata4 = t.sectionMetadata("export", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfExport), endLoc, _startLoc17);
          }());

          parseExportSection(numberOfExport);
          var _nodes4 = [];
          return {
            nodes: _nodes4,
            metadata: _metadata4,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.code:
        {
          dumpSep("section Code");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc18 = getPosition();

          var _u4 = readU32();

          var numberOfFuncs = _u4.value;
          eatBytes(_u4.nextIndex);

          var _metadata5 = t.sectionMetadata("code", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfFuncs), endLoc, _startLoc18);
          }());

          if (opts.ignoreCodeSection === true) {
            var remainingBytes = sectionSizeInBytes - _u4.nextIndex;
            eatBytes(remainingBytes); // eat the entire section
          } else {
            parseCodeSection(numberOfFuncs);
          }

          var _nodes5 = [];
          return {
            nodes: _nodes5,
            metadata: _metadata5,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.start:
        {
          dumpSep("section Start");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _metadata6 = t.sectionMetadata("start", startOffset, sectionSizeInBytesNode);

          var _nodes6 = [parseStartSection()];
          return {
            nodes: _nodes6,
            metadata: _metadata6,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.element:
        {
          dumpSep("section Element");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc19 = getPosition();

          var numberOfElementsu32 = readU32();
          var numberOfElements = numberOfElementsu32.value;
          eatBytes(numberOfElementsu32.nextIndex);

          var _metadata7 = t.sectionMetadata("element", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfElements), endLoc, _startLoc19);
          }());

          var _nodes7 = parseElemSection(numberOfElements);

          return {
            nodes: _nodes7,
            metadata: _metadata7,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.global:
        {
          dumpSep("section Global");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc20 = getPosition();

          var numberOfGlobalsu32 = readU32();
          var numberOfGlobals = numberOfGlobalsu32.value;
          eatBytes(numberOfGlobalsu32.nextIndex);

          var _metadata8 = t.sectionMetadata("global", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfGlobals), endLoc, _startLoc20);
          }());

          var _nodes8 = parseGlobalSection(numberOfGlobals);

          return {
            nodes: _nodes8,
            metadata: _metadata8,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.memory:
        {
          dumpSep("section Memory");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc21 = getPosition();

          var _numberOfElementsu = readU32();

          var _numberOfElements = _numberOfElementsu.value;
          eatBytes(_numberOfElementsu.nextIndex);

          var _metadata9 = t.sectionMetadata("memory", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(_numberOfElements), endLoc, _startLoc21);
          }());

          var _nodes9 = parseMemorySection(_numberOfElements);

          return {
            nodes: _nodes9,
            metadata: _metadata9,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.data:
        {
          dumpSep("section Data");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _metadata10 = t.sectionMetadata("data", startOffset, sectionSizeInBytesNode);

          var _startLoc22 = getPosition();

          var _numberOfElementsu2 = readU32();

          var _numberOfElements2 = _numberOfElementsu2.value;
          eatBytes(_numberOfElementsu2.nextIndex);

          _metadata10.vectorOfSize = function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(_numberOfElements2), endLoc, _startLoc22);
          }();

          if (opts.ignoreDataSection === true) {
            var _remainingBytes = sectionSizeInBytes - _numberOfElementsu2.nextIndex;

            eatBytes(_remainingBytes); // eat the entire section

            dumpSep("ignore data (" + sectionSizeInBytes + " bytes)");
            return {
              nodes: [],
              metadata: _metadata10,
              nextSectionIndex: nextSectionIndex
            };
          } else {
            var _nodes10 = parseDataSection(_numberOfElements2);

            return {
              nodes: _nodes10,
              metadata: _metadata10,
              nextSectionIndex: nextSectionIndex
            };
          }
        }

      case _helperWasmBytecode["default"].sections.custom:
        {
          dumpSep("section Custom");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _metadata11 = [t.sectionMetadata("custom", startOffset, sectionSizeInBytesNode)];
          var sectionName = readUTF8String();
          eatBytes(sectionName.nextIndex);
          dump([], "section name (".concat(sectionName.value, ")"));

          var _remainingBytes2 = sectionSizeInBytes - sectionName.nextIndex;

          if (sectionName.value === "name") {
            var initialOffset = offset;

            try {
              _metadata11.push.apply(_metadata11, _toConsumableArray(parseNameSection(_remainingBytes2)));
            } catch (e) {
              console.warn("Failed to decode custom \"name\" section @".concat(offset, "; ignoring (").concat(e.message, ")."));
              eatBytes(offset - (initialOffset + _remainingBytes2));
            }
          } else if (sectionName.value === "producers") {
            var _initialOffset = offset;

            try {
              _metadata11.push(parseProducersSection());
            } catch (e) {
              console.warn("Failed to decode custom \"producers\" section @".concat(offset, "; ignoring (").concat(e.message, ")."));
              eatBytes(offset - (_initialOffset + _remainingBytes2));
            }
          } else {
            // We don't parse the custom section
            eatBytes(_remainingBytes2);
            dumpSep("ignore custom " + JSON.stringify(sectionName.value) + " section (" + _remainingBytes2 + " bytes)");
          }

          return {
            nodes: [],
            metadata: _metadata11,
            nextSectionIndex: nextSectionIndex
          };
        }
    }

    if (opts.errorOnUnknownSection) {
      throw new _helperApiError.CompileError("Unexpected section: " + toHex(sectionId));
    } else {
      dumpSep("section " + toHex(sectionId));
      dump([sectionId], "section code");
      dump([sectionSizeInBytes], "section size");
      eatBytes(sectionSizeInBytes);
      dumpSep("ignoring (" + sectionSizeInBytes + " bytes)");
      return {
        nodes: [],
        metadata: [],
        nextSectionIndex: 0
      };
    }
  }

  function parseBlockType() {
    var blocktypeByte = readByte();
    var blocktype = _helperWasmBytecode["default"].blockTypes[blocktypeByte];

    if (typeof blocktype !== "undefined") {
      eatBytes(1);
      dump([blocktypeByte], "blocktype"); // value type

      return blocktype;
    } else {
      // type index
      var u32 = readU32();
      eatBytes(u32.nextIndex);
      var signature = state.typesInModule[u32.value];
      console.log({
        signature: signature
      });
      dump([u32.value], "typeidx");
      return u32.value;
    }
  }

  parseModuleHeader();
  parseVersion();
  var moduleFields = [];
  var sectionIndex = 0;
  var moduleMetadata = {
    sections: [],
    functionNames: [],
    localNames: [],
    producers: []
  };
  /**
   * All the generate declaration are going to be stored in our state
   */

  while (offset < buf.length) {
    var _parseSection = parseSection(sectionIndex),
        nodes = _parseSection.nodes,
        metadata = _parseSection.metadata,
        nextSectionIndex = _parseSection.nextSectionIndex;

    moduleFields.push.apply(moduleFields, _toConsumableArray(nodes));
    var metadataArray = Array.isArray(metadata) ? metadata : [metadata];
    metadataArray.forEach(function (metadataItem) {
      // $FlowIgnore
      if (metadataItem.type === "FunctionNameMetadata") {
        moduleMetadata.functionNames.push(metadataItem); // $FlowIgnore
      } else if (metadataItem.type === "LocalNameMetadata") {
        moduleMetadata.localNames.push(metadataItem); // $FlowIgnore
      } else if (metadataItem.type === "ProducersSectionMetadata") {
        moduleMetadata.producers.push(metadataItem);
      } else {
        moduleMetadata.sections.push(metadataItem);
      }
    }); // Ignore custom section

    if (nextSectionIndex) {
      sectionIndex = nextSectionIndex;
    }
  }
  /**
   * Transform the state into AST nodes
   */


  var funcIndex = 0;
  state.functionsInModule.forEach(function (func) {
    var params = func.signature.params;
    var result = func.signature.result;
    var body = []; // External functions doesn't provide any code, can skip it here

    if (func.isExternal === true) {
      return;
    }

    var decodedElementInCodeSection = state.elementsInCodeSection[funcIndex];

    if (opts.ignoreCodeSection === false) {
      if (typeof decodedElementInCodeSection === "undefined") {
        throw new _helperApiError.CompileError("func " + toHex(funcIndex) + " code not found");
      }

      body = decodedElementInCodeSection.code;
    }

    funcIndex++;
    var funcNode = t.func(func.id, t.signature(params, result), body);

    if (func.isExternal === true) {
      funcNode.isExternal = func.isExternal;
    } // Add function position in the binary if possible


    if (opts.ignoreCodeSection === false) {
      var _startLoc23 = decodedElementInCodeSection.startLoc,
          endLoc = decodedElementInCodeSection.endLoc,
          bodySize = decodedElementInCodeSection.bodySize;
      funcNode = t.withLoc(funcNode, endLoc, _startLoc23);
      funcNode.metadata = {
        bodySize: bodySize
      };
    }

    moduleFields.push(funcNode);
  });
  state.elementsInExportSection.forEach(function (moduleExport) {
    /**
     * If the export has no id, we won't be able to call it from the outside
     * so we can omit it
     */
    if (moduleExport.id != null) {
      moduleFields.push(t.withLoc(t.moduleExport(moduleExport.name, t.moduleExportDescr(moduleExport.type, moduleExport.id)), moduleExport.endLoc, moduleExport.startLoc));
    }
  });
  dumpSep("end of program");
  var module = t.module(null, moduleFields, t.moduleMetadata(moduleMetadata.sections, moduleMetadata.functionNames, moduleMetadata.localNames, moduleMetadata.producers));
  return t.program([module]);
}

/***/ }),

/***/ "./node_modules/@xtuc/ieee754/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@xtuc/ieee754/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   read: () => (/* binding */ read),
/* harmony export */   write: () => (/* binding */ write)
/* harmony export */ });
function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/@xtuc/long/src/long.js":
/*!*********************************************!*\
  !*** ./node_modules/@xtuc/long/src/long.js ***!
  \*********************************************/
/***/ ((module) => {

module.exports = Long;

/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
var wasm = null;

try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
  ])), {}).exports;
} catch (e) {
  // no wasm support :(
}

/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {

    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */
    this.low = low | 0;

    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */
    this.high = high | 0;

    /**
     * Whether unsigned or not.
     * @type {boolean}
     */
    this.unsigned = !!unsigned;
}

// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.

/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;

Object.defineProperty(Long.prototype, "__isLong__", { value: true });

/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
    return (obj && obj["__isLong__"]) === true;
}

/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
Long.isLong = isLong;

/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};

/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}

/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromInt = fromInt;

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
    if (isNaN(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    } else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return fromNumber(-value, unsigned).neg();
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}

/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromNumber = fromNumber;

/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}

/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromBits = fromBits;

/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        // For goog.math.long compatibility
        radix = unsigned,
        unsigned = false;
    } else {
        unsigned = !! unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');

    var p;
    if ((p = str.indexOf('-')) > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }

    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));

    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i),
            value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}

/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
Long.fromString = fromString;

/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
    if (typeof val === 'number')
        return fromNumber(val, unsigned);
    if (typeof val === 'string')
        return fromString(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}

/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
Long.fromValue = fromValue;

// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);

/**
 * Signed zero.
 * @type {!Long}
 */
Long.ZERO = ZERO;

/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);

/**
 * Unsigned zero.
 * @type {!Long}
 */
Long.UZERO = UZERO;

/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);

/**
 * Signed one.
 * @type {!Long}
 */
Long.ONE = ONE;

/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);

/**
 * Unsigned one.
 * @type {!Long}
 */
Long.UONE = UONE;

/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);

/**
 * Signed negative one.
 * @type {!Long}
 */
Long.NEG_ONE = NEG_ONE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

/**
 * Maximum signed value.
 * @type {!Long}
 */
Long.MAX_VALUE = MAX_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

/**
 * Maximum unsigned value.
 * @type {!Long}
 */
Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000|0, false);

/**
 * Minimum signed value.
 * @type {!Long}
 */
Long.MIN_VALUE = MIN_VALUE;

/**
 * @alias Long.prototype
 * @inner
 */
var LongPrototype = Long.prototype;

/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @this {!Long}
 * @returns {number}
 */
LongPrototype.toInt = function toInt() {
    return this.unsigned ? this.low >>> 0 : this.low;
};

/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @this {!Long}
 * @returns {number}
 */
LongPrototype.toNumber = function toNumber() {
    if (this.unsigned)
        return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
    return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};

/**
 * Converts the Long to a string written in the specified radix.
 * @this {!Long}
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
LongPrototype.toString = function toString(radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    if (this.isZero())
        return '0';
    if (this.isNegative()) { // Unsigned Longs are never negative
        if (this.eq(MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = fromNumber(radix),
                div = this.div(radixLong),
                rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
        } else
            return '-' + this.neg().toString(radix);
    }

    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
        rem = this;
    var result = '';
    while (true) {
        var remDiv = rem.div(radixToPower),
            intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
            digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero())
            return digits + result;
        else {
            while (digits.length < 6)
                digits = '0' + digits;
            result = '' + digits + result;
        }
    }
};

/**
 * Gets the high 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed high bits
 */
LongPrototype.getHighBits = function getHighBits() {
    return this.high;
};

/**
 * Gets the high 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned high bits
 */
LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
    return this.high >>> 0;
};

/**
 * Gets the low 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed low bits
 */
LongPrototype.getLowBits = function getLowBits() {
    return this.low;
};

/**
 * Gets the low 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned low bits
 */
LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
    return this.low >>> 0;
};

/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @this {!Long}
 * @returns {number}
 */
LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
    if (this.isNegative()) // Unsigned Longs are never negative
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
    var val = this.high != 0 ? this.high : this.low;
    for (var bit = 31; bit > 0; bit--)
        if ((val & (1 << bit)) != 0)
            break;
    return this.high != 0 ? bit + 33 : bit + 1;
};

/**
 * Tests if this Long's value equals zero.
 * @this {!Long}
 * @returns {boolean}
 */
LongPrototype.isZero = function isZero() {
    return this.high === 0 && this.low === 0;
};

/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
LongPrototype.eqz = LongPrototype.isZero;

/**
 * Tests if this Long's value is negative.
 * @this {!Long}
 * @returns {boolean}
 */
LongPrototype.isNegative = function isNegative() {
    return !this.unsigned && this.high < 0;
};

/**
 * Tests if this Long's value is positive.
 * @this {!Long}
 * @returns {boolean}
 */
LongPrototype.isPositive = function isPositive() {
    return this.unsigned || this.high >= 0;
};

/**
 * Tests if this Long's value is odd.
 * @this {!Long}
 * @returns {boolean}
 */
LongPrototype.isOdd = function isOdd() {
    return (this.low & 1) === 1;
};

/**
 * Tests if this Long's value is even.
 * @this {!Long}
 * @returns {boolean}
 */
LongPrototype.isEven = function isEven() {
    return (this.low & 1) === 0;
};

/**
 * Tests if this Long's value equals the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.equals = function equals(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
        return false;
    return this.high === other.high && this.low === other.low;
};

/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.eq = LongPrototype.equals;

/**
 * Tests if this Long's value differs from the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.notEquals = function notEquals(other) {
    return !this.eq(/* validates */ other);
};

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.neq = LongPrototype.notEquals;

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ne = LongPrototype.notEquals;

/**
 * Tests if this Long's value is less than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThan = function lessThan(other) {
    return this.comp(/* validates */ other) < 0;
};

/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lt = LongPrototype.lessThan;

/**
 * Tests if this Long's value is less than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
    return this.comp(/* validates */ other) <= 0;
};

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lte = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.le = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is greater than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThan = function greaterThan(other) {
    return this.comp(/* validates */ other) > 0;
};

/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gt = LongPrototype.greaterThan;

/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
    return this.comp(/* validates */ other) >= 0;
};

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gte = LongPrototype.greaterThanOrEqual;

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ge = LongPrototype.greaterThanOrEqual;

/**
 * Compares this Long's value with the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.compare = function compare(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.eq(other))
        return 0;
    var thisNeg = this.isNegative(),
        otherNeg = other.isNegative();
    if (thisNeg && !otherNeg)
        return -1;
    if (!thisNeg && otherNeg)
        return 1;
    // At this point the sign bits are the same
    if (!this.unsigned)
        return this.sub(other).isNegative() ? -1 : 1;
    // Both are positive if at least one is unsigned
    return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
};

/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.comp = LongPrototype.compare;

/**
 * Negates this Long's value.
 * @this {!Long}
 * @returns {!Long} Negated Long
 */
LongPrototype.negate = function negate() {
    if (!this.unsigned && this.eq(MIN_VALUE))
        return MIN_VALUE;
    return this.not().add(ONE);
};

/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
LongPrototype.neg = LongPrototype.negate;

/**
 * Returns the sum of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
LongPrototype.add = function add(addend) {
    if (!isLong(addend))
        addend = fromValue(addend);

    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = addend.high >>> 16;
    var b32 = addend.high & 0xFFFF;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the difference of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.subtract = function subtract(subtrahend) {
    if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
    return this.add(subtrahend.neg());
};

/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.sub = LongPrototype.subtract;

/**
 * Returns the product of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.multiply = function multiply(multiplier) {
    if (this.isZero())
        return ZERO;
    if (!isLong(multiplier))
        multiplier = fromValue(multiplier);

    // use wasm support if present
    if (wasm) {
        var low = wasm["mul"](this.low,
                              this.high,
                              multiplier.low,
                              multiplier.high);
        return fromBits(low, wasm["get_high"](), this.unsigned);
    }

    if (multiplier.isZero())
        return ZERO;
    if (this.eq(MIN_VALUE))
        return multiplier.isOdd() ? MIN_VALUE : ZERO;
    if (multiplier.eq(MIN_VALUE))
        return this.isOdd() ? MIN_VALUE : ZERO;

    if (this.isNegative()) {
        if (multiplier.isNegative())
            return this.neg().mul(multiplier.neg());
        else
            return this.neg().mul(multiplier).neg();
    } else if (multiplier.isNegative())
        return this.mul(multiplier.neg()).neg();

    // If both longs are small, use float multiplication
    if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
        return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 0xFFFF;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.mul = LongPrototype.multiply;

/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.divide = function divide(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    if (divisor.isZero())
        throw Error('division by zero');

    // use wasm support if present
    if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!this.unsigned &&
            this.high === -0x80000000 &&
            divisor.low === -1 && divisor.high === -1) {
            // be consistent with non-wasm code path
            return this;
        }
        var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm["get_high"](), this.unsigned);
    }

    if (this.isZero())
        return this.unsigned ? UZERO : ZERO;
    var approx, rem, res;
    if (!this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (this.eq(MIN_VALUE)) {
            if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
            else if (divisor.eq(MIN_VALUE))
                return ONE;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = this.shr(1);
                approx = halfThis.div(divisor).shl(1);
                if (approx.eq(ZERO)) {
                    return divisor.isNegative() ? ONE : NEG_ONE;
                } else {
                    rem = this.sub(divisor.mul(approx));
                    res = approx.add(rem.div(divisor));
                    return res;
                }
            }
        } else if (divisor.eq(MIN_VALUE))
            return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) {
            if (divisor.isNegative())
                return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
        } else if (divisor.isNegative())
            return this.div(divisor.neg()).neg();
        res = ZERO;
    } else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned)
            divisor = divisor.toUnsigned();
        if (divisor.gt(this))
            return UZERO;
        if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
        res = UZERO;
    }

    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = this;
    while (rem.gte(divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2),
            delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx),
            approxRem = approxRes.mul(divisor);
        while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
        }

        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (approxRes.isZero())
            approxRes = ONE;

        res = res.add(approxRes);
        rem = rem.sub(approxRem);
    }
    return res;
};

/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.div = LongPrototype.divide;

/**
 * Returns this Long modulo the specified.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.modulo = function modulo(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);

    // use wasm support if present
    if (wasm) {
        var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm["get_high"](), this.unsigned);
    }

    return this.sub(this.div(divisor).mul(divisor));
};

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.mod = LongPrototype.modulo;

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.rem = LongPrototype.modulo;

/**
 * Returns the bitwise NOT of this Long.
 * @this {!Long}
 * @returns {!Long}
 */
LongPrototype.not = function not() {
    return fromBits(~this.low, ~this.high, this.unsigned);
};

/**
 * Returns the bitwise AND of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.and = function and(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};

/**
 * Returns the bitwise OR of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.or = function or(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};

/**
 * Returns the bitwise XOR of this Long and the given one.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.xor = function xor(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftLeft = function shiftLeft(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
    else
        return fromBits(0, this.low << (numBits - 32), this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shl = LongPrototype.shiftLeft;

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRight = function shiftRight(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
    else
        return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
};

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr = LongPrototype.shiftRight;

/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
    if (isLong(numBits)) numBits = numBits.toInt();
    if ((numBits &= 63) === 0) return this;
    if (numBits < 32) return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >>> numBits, this.unsigned);
    if (numBits === 32) return fromBits(this.high, 0, this.unsigned);
    return fromBits(this.high >>> (numBits - 32), 0, this.unsigned);
};

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shru = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits rotated to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
LongPrototype.rotateLeft = function rotateLeft(numBits) {
    var b;
    if (isLong(numBits)) numBits = numBits.toInt();
    if ((numBits &= 63) === 0) return this;
    if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = (32 - numBits);
        return fromBits(((this.low << numBits) | (this.high >>> b)), ((this.high << numBits) | (this.low >>> b)), this.unsigned);
    }
    numBits -= 32;
    b = (32 - numBits);
    return fromBits(((this.high << numBits) | (this.low >>> b)), ((this.low << numBits) | (this.high >>> b)), this.unsigned);
}
/**
 * Returns this Long with bits rotated to the left by the given amount. This is an alias of {@link Long#rotateLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
LongPrototype.rotl = LongPrototype.rotateLeft;

/**
 * Returns this Long with bits rotated to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
LongPrototype.rotateRight = function rotateRight(numBits) {
    var b;
    if (isLong(numBits)) numBits = numBits.toInt();
    if ((numBits &= 63) === 0) return this;
    if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = (32 - numBits);
        return fromBits(((this.high << b) | (this.low >>> numBits)), ((this.low << b) | (this.high >>> numBits)), this.unsigned);
    }
    numBits -= 32;
    b = (32 - numBits);
    return fromBits(((this.low << b) | (this.high >>> numBits)), ((this.high << b) | (this.low >>> numBits)), this.unsigned);
}
/**
 * Returns this Long with bits rotated to the right by the given amount. This is an alias of {@link Long#rotateRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
LongPrototype.rotr = LongPrototype.rotateRight;

/**
 * Converts this Long to signed.
 * @this {!Long}
 * @returns {!Long} Signed long
 */
LongPrototype.toSigned = function toSigned() {
    if (!this.unsigned)
        return this;
    return fromBits(this.low, this.high, false);
};

/**
 * Converts this Long to unsigned.
 * @this {!Long}
 * @returns {!Long} Unsigned long
 */
LongPrototype.toUnsigned = function toUnsigned() {
    if (this.unsigned)
        return this;
    return fromBits(this.low, this.high, true);
};

/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @this {!Long}
 * @returns {!Array.<number>} Byte representation
 */
LongPrototype.toBytes = function toBytes(le) {
    return le ? this.toBytesLE() : this.toBytesBE();
};

/**
 * Converts this Long to its little endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Little endian byte representation
 */
LongPrototype.toBytesLE = function toBytesLE() {
    var hi = this.high,
        lo = this.low;
    return [
        lo        & 0xff,
        lo >>>  8 & 0xff,
        lo >>> 16 & 0xff,
        lo >>> 24       ,
        hi        & 0xff,
        hi >>>  8 & 0xff,
        hi >>> 16 & 0xff,
        hi >>> 24
    ];
};

/**
 * Converts this Long to its big endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Big endian byte representation
 */
LongPrototype.toBytesBE = function toBytesBE() {
    var hi = this.high,
        lo = this.low;
    return [
        hi >>> 24       ,
        hi >>> 16 & 0xff,
        hi >>>  8 & 0xff,
        hi        & 0xff,
        lo >>> 24       ,
        lo >>> 16 & 0xff,
        lo >>>  8 & 0xff,
        lo        & 0xff
    ];
};

/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
Long.fromBytes = function fromBytes(bytes, unsigned, le) {
    return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};

/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
    return new Long(
        bytes[0]       |
        bytes[1] <<  8 |
        bytes[2] << 16 |
        bytes[3] << 24,
        bytes[4]       |
        bytes[5] <<  8 |
        bytes[6] << 16 |
        bytes[7] << 24,
        unsigned
    );
};

/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
    return new Long(
        bytes[4] << 24 |
        bytes[5] << 16 |
        bytes[6] <<  8 |
        bytes[7],
        bytes[0] << 24 |
        bytes[1] << 16 |
        bytes[2] <<  8 |
        bytes[3],
        unsigned
    );
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_webassemblyjs_wasm_parser_lib_decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../node_modules/@webassemblyjs/wasm-parser/lib/decoder */ "./node_modules/@webassemblyjs/wasm-parser/lib/decoder.js");

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__items');
  console.log('tabs:', tabs);
  console.log('tabsContent:', tabsContent);
  function hideTabContent() {
    tabsContent.forEach(item => {
      item.style.display = 'none';
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
  }
  tabsParent.addEventListener('click', e => {
    const target = e.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((tab, index) => {
        if (target === tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
  hideTabContent();
  showTabContent();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map