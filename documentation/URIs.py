from rdflib import Namespace

# Namespaces
core = Namespace("https://w3id.org/polifonia/ontology/core/")
music_meta = Namespace("https://w3id.org/polifonia/ontology/music-meta/")
prov = Namespace("http://www.w3.org/ns/prov#")
mucho = Namespace("https://raw.githubusercontent.com/tommasobattisti/MuCH-O/main/ontology/mucho.owl#")


# Classes
Agent = core.Agent
Group = mucho.Group
MusicEnsemble  = music_meta.MusicEnsemble
Person = core.Person
Musician = music_meta.Musician
InformationObject = core.InformationObject
AudiovisualEntity = mucho.AudiovisualEntity
LiteraryEntity = mucho.LiteraryEntity
VisualArtEntity = mucho.VisualArtEntity
MusicEntity = music_meta.MusicEntity
MusicAlbum = mucho.MusicAlbum
Song = mucho.Song
MusicArtist = music_meta.MusicArtist
MusicGenre = music_meta.MusicGenre
Influence = prov.Influence
EntityInfluence = prov.EntityInfluence
Inspiration = mucho.Inspiration
Derivation = prov.Derivation
Adaptation = mucho.Adaptation
Basis = mucho.Basis
Reference = mucho.Reference
Allusion = mucho.Allusion
Citation = mucho.Citation
Mention = mucho.Mention
Text = music_meta.Text
Lyrics = music_meta.Lyrics
TextFragment = music_meta.TextFragment
Annotation = mucho.Annotation

# Object properties
hasinformationSource = mucho.hasinformationSource
hasAuthor = mucho.hasAuthor
isAuthorOf = mucho.isAuthorOf
hasGenre = music_meta.hasGenre
isGenreOf = music_meta.isGenreOf
hasMember = core.hasMember
isMemberOf = core.isMemberOf
hasPart = core.hasPart
isPartOf = core.isPartOf
hasMusicEntityPart = music_meta.hasMusicEntityPart
isPartOfMusicEntity = music_meta.isPartOfMusicEntity
isTextFragmentOf = music_meta.isTextFragmentOf
hasTextFragment = music_meta.hasTextFragment
hasSource = music_meta.hasSource
influenced = prov.influenced
influencer = prov.influencer
entity = prov.entity
qualifiedInfluence = prov.qualifiedInfluence
qualifiedDerivation = prov.qualifiedDerivation
qualifiedAdaptation = mucho.qualifiedAdaptation
qualifiedBasis = mucho.qualifiedBasis
qualifiedReference = mucho.qualifiedReference
qualifiedAllusion = mucho.qualifiedAllusion
qualifiedCitation = mucho.qualifiedCitation
qualifiedMention = mucho.qualifiedMention
qualifiedInspiration = mucho.qualifiedInspiration
wasInfluencedBy = prov.wasInfluencedBy
wasDerivedFrom = prov.wasDerivedFrom
isAdaptationOf = mucho.isAdaptationOf
isBasedOn = mucho.isBasedOn
references = mucho.references
alludesTo = mucho.alludesTo
cites = mucho.cites
mentions = mucho.mentions
wasInspiredBy = mucho.wasInspiredBy
hasAnnotation = mucho.hasAnnotation
isAnnotationOf = mucho.isAnnotationOf

# Data properties
influenceInformation = mucho.influenceInformation
influenceInformationSource = mucho.influenceInformationSource
influenceSourceText = mucho.influenceSourceText
name = core.name
nickname = core.nickname
text = core.text
title = core.title
