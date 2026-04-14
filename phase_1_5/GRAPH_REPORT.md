# Graph Report - src/OpenFOAM/ (fields + primitives + containers + db + matrices + meshes) + applications/solvers/  (2026-04-14)

## Corpus Check
- 1696 files · ~900,000 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 5876 nodes · 8080 edges · 76 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `polyMesh.hpp` - 80 edges
2. `globalMeshData.hpp` - 48 edges
3. `face.hpp` - 42 edges
4. `primitiveMesh.hpp` - 41 edges
5. `polyPatch.hpp` - 40 edges
6. `polyBoundaryMesh.hpp` - 39 edges
7. `globalPoints.hpp` - 32 edges
8. `ZoneList.hpp` - 30 edges
9. `syncTools.hpp` - 30 edges
10. `cyclicPolyPatch.hpp` - 29 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Registry & Runtime Selection"
Cohesion: 0.01
Nodes (67): calcEntry, dlLibraryTable, calcIncludeEntry, codedBase, dynamicCode, Coded, coded, calcEntry (+59 more)

### Community 1 - "Primitive Type IO & Streams"
Cohesion: 0.01
Nodes (71): Istream, Ostream, pTraits<bool>, Istream, Ostream, complex, dictionaryEntry, dictionaryEntry::dictionaryEntry() (+63 more)

### Community 2 - "Coupled Patch Fields"
Cohesion: 0.01
Nodes (101): coupledFacePointPatch.hpp, coupledFacePointPatch, pointBoundaryMesh, coupledPointPatch.hpp, coupledPointPatch, pointBoundaryMesh, coupledPolyPatch.hpp, coupledPolyPatch (+93 more)

### Community 3 - "Linked Lists & Istream"
Cohesion: 0.01
Nodes (48): dummyIstream, FIFOStack, ILList, Istream, Ostream, INew, Istream, IOstream (+40 more)

### Community 4 - "Cell Shape & Mesh Primitives"
Cohesion: 0.01
Nodes (89): cellMatcherI.hpp, cellModel.hpp, cellModel, cellModelI.hpp, cellModelIO.cpp, cellModeller.hpp, cellModeller, cellShape.hpp (+81 more)

### Community 5 - "Point Patch Boundary Conditions"
Cohesion: 0.01
Nodes (53): word, basicSymmetryPointPatchField, calculatedPointPatchField, codedFixedValuePointPatchField, codedFixedValuePointPatchField, CompactIOList, CompactIOListBase, Constant (+45 more)

### Community 6 - "Barycentric & Spatial Tensors"
Cohesion: 0.01
Nodes (94): Barycentric, randomGenerator, BarycentricTensor, typeOfTranspose<Cmpt, BarycentricTensor<Cmpt>>, FixedList, Pair, sph(), tr() (+86 more)

### Community 7 - "Bounding Box & Mesh Geometry"
Cohesion: 0.01
Nodes (68): boundBox.hpp, boundBox, tmp, boundBoxI.hpp, boundBoxTemplates.cpp, cell.hpp, cell, cellI.hpp (+60 more)

### Community 8 - "Ldu Matrix & Solver Interfaces"
Cohesion: 0.02
Nodes (51): CompactIOField, cyclicLduInterface, cyclicLduInterfaceField, cyclicLduInterfaceField::~cyclicLduInterfaceField(), cyclicSlipPointPatchField, DiagTensor, dictionary, Field (+43 more)

### Community 9 - "Time & IO Control"
Cohesion: 0.01
Nodes (43): controlIOdictionary, controlIOdictionary::controlIOdictionary(), Time, dlLibraryTable, dlLibraryTable::dlLibraryTable(), functionObject, functionObject::functionObject(), polyDistributionMap (+35 more)

### Community 10 - "BiIndirect List"
Cohesion: 0.01
Nodes (42): BiIndirectList, BinSum, decomposedBlockData, DynamicList, DynamicList, IPstream, Keyed, BiIndirectList (+34 more)

### Community 11 - "Function1 Ramp Entries"
Cohesion: 0.01
Nodes (29): Add, Constant, Csv, readValue(), TableReaders::Csv<Type>::read(), Embedded, Foam, FieldFunction1 (+21 more)

### Community 12 - "Cell Mapping & Morphing"
Cohesion: 0.02
Nodes (62): cellMapper.hpp, cellMapper, polyMesh, polyTopoChangeMap, cellZone.hpp, cellZone, cellZoneList, cellZoneList.hpp (+54 more)

### Community 13 - "Matrix Solvers & Preconditioners"
Cohesion: 0.02
Nodes (38): diagonalPreconditioner, diagonalPreconditioner::diagonalPreconditioner(), diagonalSolver, diagonalSolver::diagonalSolver(), DICGaussSeidelSmoother, DICPreconditioner, DICPreconditioner::DICPreconditioner(), DICSmoother (+30 more)

### Community 14 - "Empty Constraint Patches"
Cohesion: 0.02
Nodes (57): emptyPointPatch.hpp, emptyPointPatch, emptyPolyPatch.hpp, emptyPolyPatch, facePointPatch.hpp, cyclicPointPatch, facePointPatch, initCalcGeometry() (+49 more)

### Community 15 - "Barycentric2D Primitives"
Cohesion: 0.02
Nodes (28): Barycentric2D, randomGenerator, BarycentricTensor2D, typeOfTranspose<Cmpt, BarycentricTensor2D<Cmpt>>, geometricOneField, geometricZeroField, one, oneField (+20 more)

### Community 16 - "Compact Spatial Tensor"
Cohesion: 0.02
Nodes (35): CompactSpatialTensor, typeOfInnerProduct<Cmpt, CompactSpatialTensor<Cmpt>, Tensor<Cmpt>>, typeOfInnerProduct<Cmpt, CompactSpatialTensor<Cmpt>, Vector<Cmpt>>, typeOfInnerProduct<Cmpt, SpatialTensor<Cmpt>, CompactSpatialTensor<Cmpt>>, CompactSpatialTensorT, typeOfInnerProduct
<
    Cmpt,
    CompactSpatialTensor<Cmpt>,
    CompactSpatialTensorT<Cmpt>
>, typeOfInnerProduct
<
    Cmpt,
    CompactSpatialTensorT<Cmpt>,
    CompactSpatialTensor<Cmpt>
>, typeOfInnerProduct
<
    Cmpt,
    CompactSpatialTensorT<Cmpt>,
    SpatialVector<Cmpt>
> (+27 more)

### Community 17 - "Hash Set & Table"
Cohesion: 0.02
Nodes (26): HashSet, IOobjectList, LIFOStack, addEntry(), mergeDictionaries(), Istream, nil, Ostream (+18 more)

### Community 18 - "DLList Base & Iterators"
Cohesion: 0.02
Nodes (17): const_iterator, const_reverse_iterator, DLListBase, iterator, dummyISstream, error, IOerror, IOerrorLocation (+9 more)

### Community 19 - "GAMG Agglomeration"
Cohesion: 0.02
Nodes (46): algebraicPairGAMGAgglomeration, demanddrivendata, dummyAgglomeration, dummyAgglomeration::dummyAgglomeration(), eagerGAMGProcAgglomeration, eagerGAMGProcAgglomeration::eagerGAMGProcAgglomeration(), GAMGAgglomeration, engine (+38 more)

### Community 20 - "Cell Matcher & Topology"
Cohesion: 0.02
Nodes (38): cellMatcher.hpp, cell, cellMatcher, cellModel, cellShape, primitiveMesh, degenerateMatcher.hpp, degenerateMatcher (+30 more)

### Community 21 - "Dictionary Base"
Cohesion: 0.02
Nodes (21): DictionaryBase, IOPtrList, LPtrList, PtrDictionary, autoPtr, LPtrList, PtrList, SLListBase (+13 more)

### Community 22 - "Diagonal Matrix"
Cohesion: 0.02
Nodes (24): DiagonalMatrix, Matrix, eigendecomposition, dual, Identity, LLTMatrix, QRMatrix, RectangularMatrix (+16 more)

### Community 23 - "Callback System"
Cohesion: 0.02
Nodes (15): Callback, Callback, CallbackRegistry, hashedWordList, const_iterator, HashPtrTable, HashTable, iterator (+7 more)

### Community 24 - "Compact List List"
Cohesion: 0.02
Nodes (17): CompactListList, Histogram, accessOp, offsetOp, createWithValues(), duplicateOrder(), inplaceReverseList(), inplaceRotateList() (+9 more)

### Community 25 - "Indirect List"
Cohesion: 0.02
Nodes (10): IndirectList, IndirectListAddressing, PackedBoolList, const_iterator, Istream, iterator, iteratorBase, Ostream (+2 more)

### Community 26 - "CFD Solvers"
Cohesion: 0.02
Nodes (20): fieldDictionary, GlobalIOList, GlobalIOListBase, close(), flush_buffer(), gzstreambase(), open(), overflow() (+12 more)

### Community 27 - "AutoPtr & GAMG Interface"
Cohesion: 0.03
Nodes (21): autoptr, cyclicGAMGInterface, cyclicGAMGInterface::cyclicGAMGInterface(), cyclicGAMGInterfaceField, cyclicGAMGInterfaceField::cyclicGAMGInterfaceField(), Distribution, GAMGInterface, GAMGInterface::GAMGInterface() (+13 more)

### Community 28 - "Geometric Boundary Field"
Cohesion: 0.03
Nodes (20): dictionary, GeometricBoundaryField, dictionary, GeoMesh, GeometricField, Type, Field, GeometricBoundaryField (+12 more)

### Community 29 - "Function2 & Radial"
Cohesion: 0.03
Nodes (49): innerProduct<SphericalTensor2D<Cmpt>, SphericalTensor2D<Cmpt>>, innerProduct<SphericalTensor2D<Cmpt>, Vector2D<Cmpt>>, innerProduct<Vector2D<Cmpt>, SphericalTensor2D<Cmpt>>, outerProduct<Cmpt, SphericalTensor2D<Cmpt>>, outerProduct<SphericalTensor2D<Cmpt>, Cmpt>, cof(), det(), dev() (+41 more)

### Community 30 - "Fixed List"
Cohesion: 0.03
Nodes (21): FixedList, Hash, LList, SLListBase, UList, Hash, Hash<Foam::fileName>, Hash<Foam::keyType> (+13 more)

### Community 31 - "Comm Schedule"
Cohesion: 0.03
Nodes (27): commSchedule.hpp, commSchedule, distributionMapBase.hpp, distributionMapBase, globalIndex, PstreamBuffers, distributionMapBaseTemplates.cpp, globalIndex.hpp (+19 more)

### Community 32 - "Dense Matrix"
Cohesion: 0.04
Nodes (12): ConstMatrixBlock, Matrix, MatrixBlock, MatrixSpace, ConstMatrixBlock, MatrixBlock, Block, ConstBlock (+4 more)

### Community 33 - "Field Mapper"
Cohesion: 0.04
Nodes (15): FieldFunctor, fieldMapper, fieldMapper::FieldFunctor, fieldMapper::FieldOpFunctor, FieldOpFunctor, forwardFieldMapper, forwardOrAssignFieldMapper, forwardOrAssignPatchFieldMapper (+7 more)

### Community 34 - "Band Compression & Object Hit"
Cohesion: 0.04
Nodes (17): bandCompression.hpp, objectHit.hpp, objectHit, primitivePatch.hpp, PrimitivePatchAddressing.cpp, PrimitivePatchBdryPoints.cpp, PrimitivePatchCheck.cpp, PrimitivePatchClear.cpp (+9 more)

### Community 35 - "Ramp Functions"
Cohesion: 0.05
Nodes (8): exponentialSqrRamp, halfCosineRamp, linearRamp, quadraticRamp, quarterCosineRamp, quarterSineRamp, Ramp, reverseRamp

### Community 36 - "Old Time Field"
Cohesion: 0.05
Nodes (9): OldTimeField, SubField, UniformDimensionedField, UniformField, UniformFieldField, max(), min(), Type() (+1 more)

### Community 37 - "Dynamic Field"
Cohesion: 0.05
Nodes (6): DynamicField, DynamicField, globalIndexAndTransform, globalIndexAndTransform::globalIndexAndTransform(), less, polyMesh

### Community 38 - "Vector Space Ops"
Cohesion: 0.06
Nodes (7): cmptAv(), cmptSum(), mag(), magSqr(), normalised(), VectorSpaceOps, VectorSpaceOps<N, N>

### Community 39 - "Label Range"
Cohesion: 0.05
Nodes (9): const_iterator, Istream, labelRange, less, Ostream, const_iterator, Istream, labelRanges (+1 more)

### Community 40 - "Cubic Equation"
Cohesion: 0.06
Nodes (4): cubicEqn, linearEqn, quadraticEqn, Roots

### Community 41 - "Tensor Operations"
Cohesion: 0.08
Nodes (16): det(), dev(), dev2(), innerProduct<SphericalTensor<Cmpt>, Tensor<Cmpt>>, innerProduct<SymmTensor<Cmpt>, Tensor<Cmpt>>, innerProduct<Tensor<Cmpt>, SphericalTensor<Cmpt>>, innerProduct<Tensor<Cmpt>, SymmTensor<Cmpt>>, inv() (+8 more)

### Community 42 - "Circulator"
Cohesion: 0.07
Nodes (3): Circulator, CirculatorBase, ConstCirculator

### Community 43 - "Foam Run & Multi-Region"
Cohesion: 0.11
Nodes (5): iterator, regionSolvers, regionSolvers::regionSolvers(), adjustDeltaT(), setDeltaT()

### Community 44 - "Quaternion Operations"
Cohesion: 0.16
Nodes (12): conjugate(), inv(), mag(), magSqr(), normalise(), operator==(), quaternion::invTransform(), quaternion::normalised() (+4 more)

### Community 45 - "Edge Primitives"
Cohesion: 0.13
Nodes (1): edgeI.hpp

### Community 46 - "Complex Numbers"
Cohesion: 0.23
Nodes (7): complex(), conjugate(), limit(), mag(), magSqr(), operator+=(), Tensor

### Community 47 - "Dummy Transform"
Cohesion: 0.2
Nodes (6): dummyTransform.hpp, dummyTransform, pTraits<face>, pTraits<Field<T>>, pTraits<List<T>>, pTraits<UList<T>>

### Community 48 - "Incomplete Gamma"
Cohesion: 0.42
Nodes (8): calcPE15(), calcQE11(), calcQE16(), calcTE18(), incGamma_P(), incGamma_Q(), incGammaRatio_P(), incGammaRatio_Q()

### Community 49 - "Map Geometric Fields"
Cohesion: 0.33
Nodes (1): MapInternalField

### Community 50 - "Inv Incomplete Gamma"
Cohesion: 0.7
Nodes (4): invIncGammaRatio_P(), minimaxs(), R(), Sn()

### Community 51 - "Map Added Poly Mesh"
Cohesion: 0.67
Nodes (3): mapAddedPolyMesh.hpp, mapAddedPolyMesh, polyTopoChangeMap

### Community 52 - "Min/Max Ops"
Cohesion: 0.67
Nodes (0): 

### Community 53 - "Map Patch Change"
Cohesion: 0.67
Nodes (2): mapPatchChange.hpp, mapPatchChange

### Community 54 - "Wall Patch Interrogation"
Cohesion: 1.0
Nodes (0): 

### Community 55 - "Y Equation Solver"
Cohesion: 1.0
Nodes (0): 

### Community 56 - "Base Field Creation"
Cohesion: 1.0
Nodes (0): 

### Community 57 - "P Equation Solver"
Cohesion: 1.0
Nodes (0): 

### Community 58 - "Initial Conditions"
Cohesion: 1.0
Nodes (0): 

### Community 59 - "PotentialFoam Solver"
Cohesion: 1.0
Nodes (0): 

### Community 60 - "Post Processing"
Cohesion: 1.0
Nodes (0): 

### Community 61 - "Map Dimensioned Fields"
Cohesion: 1.0
Nodes (0): 

### Community 62 - "Map Subset Mesh"
Cohesion: 1.0
Nodes (2): mapSubsetMesh.hpp, mapSubsetMesh

### Community 63 - "Ldu Matrix Read Control"
Cohesion: 1.0
Nodes (0): 

### Community 64 - "Near Wall Evaluate"
Cohesion: 1.0
Nodes (0): 

### Community 65 - "Graph Making"
Cohesion: 1.0
Nodes (0): 

### Community 66 - "Control Creation"
Cohesion: 1.0
Nodes (0): 

### Community 67 - "Field References"
Cohesion: 1.0
Nodes (0): 

### Community 68 - "Zero Dim FvMesh"
Cohesion: 1.0
Nodes (0): 

### Community 69 - "H Equation Solver"
Cohesion: 1.0
Nodes (0): 

### Community 70 - "Output Utility"
Cohesion: 1.0
Nodes (0): 

### Community 71 - "Read Controls"
Cohesion: 1.0
Nodes (0): 

### Community 72 - "Chemistry Solver"
Cohesion: 1.0
Nodes (0): 

### Community 73 - "Point Field Reading"
Cohesion: 1.0
Nodes (0): 

### Community 74 - "Surface Field Reading"
Cohesion: 1.0
Nodes (0): 

### Community 75 - "Vol Field Reading"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **773 isolated node(s):** `iterator`, `Circulator`, `ConstCirculator`, `Dictionary`, `DictionaryBase` (+768 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Wall Patch Interrogation`** (2 nodes): `interrogateWallPatches.H`, `forAll()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Y Equation Solver`** (2 nodes): `YEqn.H`, `forAll()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Base Field Creation`** (2 nodes): `createBaseFields.H`, `createFields.H`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `P Equation Solver`** (2 nodes): `pEqn.H`, `forAll()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Initial Conditions`** (2 nodes): `readInitialConditions.H`, `forAll()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PotentialFoam Solver`** (2 nodes): `potentialFoam.C`, `main()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Post Processing`** (2 nodes): `postProcess.H`, `forAll()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Map Dimensioned Fields`** (2 nodes): `MapDimensionedFields.H`, `MapDimensionedFields()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Map Subset Mesh`** (2 nodes): `mapSubsetMesh.hpp`, `mapSubsetMesh`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Ldu Matrix Read Control`** (2 nodes): `LduMatrixI.H`, `LduMatrix<Type, DType, LUType>::solver::readControl()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Near Wall Evaluate`** (1 nodes): `evaluateNearWall.H`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Graph Making`** (1 nodes): `makeGraphs.H`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Control Creation`** (1 nodes): `createControls.H`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Field References`** (1 nodes): `createFieldRefs.H`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Zero Dim FvMesh`** (1 nodes): `createZeroDimensionalFvMesh.H`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `H Equation Solver`** (1 nodes): `hEqn.H`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Output Utility`** (1 nodes): `output.H`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Read Controls`** (1 nodes): `readControls.H`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Chemistry Solver`** (1 nodes): `solveChemistry.H`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Point Field Reading`** (1 nodes): `readPointFields.H`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Surface Field Reading`** (1 nodes): `readSurfaceFields.H`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vol Field Reading`** (1 nodes): `readVolFields.H`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `DemandDrivenMeshObject.hpp` connect `Bounding Box & Mesh Geometry` to `Coupled Patch Fields`, `GAMG Agglomeration`?**
  _High betweenness centrality (0.227) - this node is a cross-community bridge._
- **Why does `polyMesh.hpp` connect `Bounding Box & Mesh Geometry` to `Coupled Patch Fields`, `Cell Shape & Mesh Primitives`, `Cell Mapping & Morphing`, `Empty Constraint Patches`, `Cell Matcher & Topology`, `Comm Schedule`?**
  _High betweenness centrality (0.161) - this node is a cross-community bridge._
- **Why does `pointMesh.hpp` connect `Coupled Patch Fields` to `Cell Mapping & Morphing`, `Empty Constraint Patches`, `Bounding Box & Mesh Geometry`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **What connects `iterator`, `Circulator`, `ConstCirculator` to the rest of the system?**
  _773 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Registry & Runtime Selection` be split into smaller, more focused modules?**
  _Cohesion score 0.01 - nodes in this community are weakly interconnected._
- **Should `Primitive Type IO & Streams` be split into smaller, more focused modules?**
  _Cohesion score 0.01 - nodes in this community are weakly interconnected._
- **Should `Coupled Patch Fields` be split into smaller, more focused modules?**
  _Cohesion score 0.01 - nodes in this community are weakly interconnected._