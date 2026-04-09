# Graph Report - src/OpenFOAM/fields/  (2026-04-09)

## Corpus Check
- Large corpus: 300 files · ~160,040 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 2023 nodes · 2701 edges · 45 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `polyMesh.hpp` - 80 edges
2. `globalMeshData.hpp` - 48 edges
3. `GeometricField.hpp` - 43 edges
4. `face.hpp` - 42 edges
5. `primitiveMesh.hpp` - 41 edges
6. `polyPatch.hpp` - 40 edges
7. `polyBoundaryMesh.hpp` - 39 edges
8. `globalPoints.hpp` - 32 edges
9. `ZoneList.hpp` - 30 edges
10. `syncTools.hpp` - 30 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Community 0"
Cohesion: 0.02
Nodes (57): cellMatcher.hpp, cell, cellMatcher, cellModel, cellShape, primitiveMesh, cellMatcherI.hpp, cellModel.hpp (+49 more)

### Community 1 - "Community 1"
Cohesion: 0.02
Nodes (78): basicSymmetryPointPatchField.hpp, basicSymmetryPointPatchField, calculatedPointPatchField.hpp, calculatedPointPatchField, calculatedPointPatchFields.hpp, codedFixedValuePointPatchField.hpp, codedFixedValuePointPatchField, codedFixedValuePointPatchFields.hpp (+70 more)

### Community 2 - "Community 2"
Cohesion: 0.02
Nodes (62): edge.hpp, edge, edgeIOList.hpp, face.hpp, face, offsetOp<face>, triFace, faceAreaInContact.cpp (+54 more)

### Community 3 - "Community 3"
Cohesion: 0.02
Nodes (51): emptyPointPatch.hpp, emptyPointPatch, emptyPolyPatch.hpp, emptyPolyPatch, facePointPatch.hpp, cyclicPointPatch, facePointPatch, initCalcGeometry() (+43 more)

### Community 4 - "Community 4"
Cohesion: 0.02
Nodes (33): coupledFacePointPatch.hpp, coupledFacePointPatch, pointBoundaryMesh, coupledPointPatch.hpp, coupledPointPatch, pointBoundaryMesh, coupledPolyPatch.hpp, coupledPolyPatch (+25 more)

### Community 5 - "Community 5"
Cohesion: 0.02
Nodes (43): cellIOList.hpp, cellMapper.hpp, cellMapper, polyMesh, polyTopoChangeMap, coupleGroupIdentifier.hpp, coupleGroupIdentifier, dictionary (+35 more)

### Community 6 - "Community 6"
Cohesion: 0.03
Nodes (56): FieldField.hpp, component(), FieldField, NewCalculatedType(), T(), FieldFieldFunctions.hpp, average(), sum() (+48 more)

### Community 7 - "Community 7"
Cohesion: 0.02
Nodes (31): cellZone.hpp, cellZone, cellZoneList, cellZoneList.hpp, cellZoneList, polyMesh, faceZone.hpp, faceZone (+23 more)

### Community 8 - "Community 8"
Cohesion: 0.02
Nodes (30): distributionMap.hpp, distributionMap, globalIndexAndTransform, transform, transformPosition, distributionMapTemplates.cpp, globalMeshData.hpp, distributionMap (+22 more)

### Community 9 - "Community 9"
Cohesion: 0.04
Nodes (48): complexFields.hpp, diagTensorField.hpp, diagTensorFieldIOField.hpp, diagTensorIOField.hpp, Field.hpp, dictionary, Field, SubField (+40 more)

### Community 10 - "Community 10"
Cohesion: 0.04
Nodes (37): DimensionedField.hpp, component(), DimensionedField, New(), operator=(), reset(), T(), DimensionedFieldFunctions.hpp (+29 more)

### Community 11 - "Community 11"
Cohesion: 0.04
Nodes (28): fieldMapper.hpp, FieldFunctor, fieldMapper, fieldMapper::FieldFunctor, fieldMapper::FieldOpFunctor, FieldOpFunctor, fieldMapperM.hpp, fieldMapperTemplates.cpp (+20 more)

### Community 12 - "Community 12"
Cohesion: 0.04
Nodes (13): boundBox.hpp, boundBox, tmp, boundBoxI.hpp, boundBoxTemplates.cpp, cell.hpp, cell, cellI.hpp (+5 more)

### Community 13 - "Community 13"
Cohesion: 0.04
Nodes (17): bandCompression.hpp, objectHit.hpp, objectHit, primitivePatch.hpp, PrimitivePatchAddressing.cpp, PrimitivePatchBdryPoints.cpp, PrimitivePatchCheck.cpp, PrimitivePatchClear.cpp (+9 more)

### Community 14 - "Community 14"
Cohesion: 0.05
Nodes (17): DemandDrivenMeshObject.hpp, DemandDrivenMeshObject, GeoMesh.hpp, GeoMesh, MapPointField.hpp, MapInternalField<Type, MeshMapper, pointMesh>, meshObjects.hpp, meshObjects (+9 more)

### Community 15 - "Community 15"
Cohesion: 0.05
Nodes (17): globalIndex.hpp, globalIndex, globalIndexI.hpp, globalIndexTemplates.cpp, mergePoints.hpp, PatchTools.hpp, boundBox, PackedBoolList (+9 more)

### Community 16 - "Community 16"
Cohesion: 0.06
Nodes (25): EdgeMap.hpp, EdgeMap, lduMesh.hpp, lduMesh, objectRegistry, lduMeshTemplates.cpp, lduPrimitiveMesh.hpp, lduPrimitiveMesh (+17 more)

### Community 17 - "Community 17"
Cohesion: 0.07
Nodes (11): generatedZoneSet.hpp, generatedZoneSet, lookup.hpp, lookup, zoneGenerator.hpp, polyMesh, zoneGenerator, zoneGeneratorList.hpp (+3 more)

### Community 18 - "Community 18"
Cohesion: 0.05
Nodes (13): GeometricBoundaryField.hpp, dictionary, GeometricBoundaryField, GeometricFieldFwd.hpp, Field, GeometricBoundaryField, GeometricField, GeometricFieldSources (+5 more)

### Community 19 - "Community 19"
Cohesion: 0.06
Nodes (4): plane.hpp, plane, ray, tetrahedronI.hpp

### Community 20 - "Community 20"
Cohesion: 0.07
Nodes (15): FieldFunctions.hpp, average(), gAverage(), gSumCmptProd(), gSumProd(), sum(), sumCmptProd(), sumProd() (+7 more)

### Community 21 - "Community 21"
Cohesion: 0.07
Nodes (10): commSchedule.hpp, commSchedule, distributionMapBase.hpp, distributionMapBase, globalIndex, PstreamBuffers, distributionMapBaseTemplates.cpp, processorTopology.hpp (+2 more)

### Community 22 - "Community 22"
Cohesion: 0.08
Nodes (21): pointBoundaryMeshMapper.hpp, pointBoundaryMeshMapper, pointMapper.hpp, pointMapper, pointMesh, polyMesh, polyTopoChangeMap, pointMeshMapper.hpp (+13 more)

### Community 23 - "Community 23"
Cohesion: 0.07
Nodes (6): treeBoundBox.hpp, randomGenerator, treeBoundBox, treeBoundBoxI.hpp, treeBoundBoxList.hpp, treeBoundBoxTemplates.cpp

### Community 24 - "Community 24"
Cohesion: 0.09
Nodes (16): UniformDimensionedField.hpp, UniformDimensionedField, uniformDimensionedFields.hpp, UniformField.hpp, UniformField, UniformFieldField.hpp, UniformFieldField, UniformFieldFieldI.hpp (+8 more)

### Community 25 - "Community 25"
Cohesion: 0.08
Nodes (1): triFaceI.hpp

### Community 26 - "Community 26"
Cohesion: 0.1
Nodes (9): geometricZeroField.hpp, geometricZeroField, geometricZeroFieldI.hpp, zeroField.hpp, zeroField, zeroFieldField.hpp, zeroFieldField, zeroFieldFieldI.hpp (+1 more)

### Community 27 - "Community 27"
Cohesion: 0.1
Nodes (9): geometricOneField.hpp, geometricOneField, geometricOneFieldI.hpp, oneField.hpp, oneField, oneFieldField.hpp, oneFieldField, oneFieldFieldI.hpp (+1 more)

### Community 28 - "Community 28"
Cohesion: 0.12
Nodes (5): DynamicField.hpp, DynamicField, DynamicFieldFwd.hpp, DynamicField, DynamicFieldI.hpp

### Community 29 - "Community 29"
Cohesion: 0.14
Nodes (6): MultiRegionList.hpp, MultiRegionListBase, MultiRegionRefs.hpp, MultiRegionRefs, RegionRef, regionName.hpp

### Community 30 - "Community 30"
Cohesion: 0.13
Nodes (1): edgeI.hpp

### Community 31 - "Community 31"
Cohesion: 0.15
Nodes (4): pointConstraint.hpp, combineConstraintsEqOp, pointConstraint, pointConstraintI.hpp

### Community 32 - "Community 32"
Cohesion: 0.27
Nodes (5): cyclicTransform.hpp, cyclicTransform, cyclicTransform::cyclicTransform(), inv(), sum()

### Community 33 - "Community 33"
Cohesion: 0.2
Nodes (6): dummyTransform.hpp, dummyTransform, pTraits<face>, pTraits<Field<T>>, pTraits<List<T>>, pTraits<UList<T>>

### Community 34 - "Community 34"
Cohesion: 0.4
Nodes (4): ReadFields.hpp, IOobjectList, objectRegistry, regIOobject

### Community 35 - "Community 35"
Cohesion: 0.33
Nodes (2): MapGeometricFields.hpp, MapInternalField

### Community 36 - "Community 36"
Cohesion: 0.7
Nodes (3): pointIndexHit.hpp, pointIndexHitIOList.hpp, pointIndexHitList.hpp

### Community 37 - "Community 37"
Cohesion: 0.67
Nodes (3): mapAddedPolyMesh.hpp, mapAddedPolyMesh, polyTopoChangeMap

### Community 38 - "Community 38"
Cohesion: 0.67
Nodes (2): mapPatchChange.hpp, mapPatchChange

### Community 39 - "Community 39"
Cohesion: 0.67
Nodes (2): fieldDictionary.hpp, fieldDictionary

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (2): mapSubsetMesh.hpp, mapSubsetMesh

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (1): MapDimensionedFields.hpp

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): readSurfaceFields.hpp

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (1): readPointFields.hpp

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (1): readVolFields.hpp

## Knowledge Gaps
- **265 isolated node(s):** `primitiveMeshCellPoints.cpp`, `primitiveMeshEdgeFaces.cpp`, `primitiveMeshEdgeCells.cpp`, `primitiveMeshPointFaces.cpp`, `PrimitivePatchName.cpp` (+260 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 40`** (2 nodes): `mapSubsetMesh.hpp`, `mapSubsetMesh`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (2 nodes): `MapDimensionedFields.hpp`, `MapDimensionedFields()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `readSurfaceFields.hpp`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `readPointFields.hpp`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `readVolFields.hpp`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `polyMesh.hpp` connect `Community 5` to `Community 0`, `Community 2`, `Community 3`, `Community 4`, `Community 7`, `Community 8`, `Community 12`, `Community 14`, `Community 15`, `Community 16`, `Community 17`, `Community 29`?**
  _High betweenness centrality (0.196) - this node is a cross-community bridge._
- **Why does `pointField.hpp` connect `Community 2` to `Community 0`, `Community 3`, `Community 4`, `Community 5`, `Community 7`, `Community 8`, `Community 12`, `Community 13`, `Community 22`, `Community 23`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Why does `primitiveMesh.hpp` connect `Community 0` to `Community 2`, `Community 3`, `Community 5`, `Community 8`, `Community 12`, `Community 14`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._
- **What connects `primitiveMeshCellPoints.cpp`, `primitiveMeshEdgeFaces.cpp`, `primitiveMeshEdgeCells.cpp` to the rest of the system?**
  _265 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.02 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.02 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.02 - nodes in this community are weakly interconnected._