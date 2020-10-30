package dousername

import (
	"math/rand"
	"strings"
	"time"
)

func random(arr []string) string {
	rand.Seed(time.Now().UnixNano())
	return arr[rand.Intn(len(arr))]
}

func randomDesc(randNoun string) string {
	if !contains(SeaCreatures, randNoun) {
		return random(Descriptors)
	}
	return random(append(Descriptors, CreatuteDescriptors...))
}

func contains(arr []string, str string) bool {
	for _, a := range arr {
		if a == str {
			return true
		}
	}
	return false
}

func capitalize(arr []string) string {
	endArr := []string{}
	for _, word := range arr {
		endArr = append(endArr, strings.Title(word))
	}
	return strings.Join(endArr[:], "")
}

// SeaCreatures : all the creature nouns
var SeaCreatures = []string{"walrus", "seal", "fish", "shark", "clam", "coral", "whale", "crab", "lobster", "starfish", "eel", "dolphin", "squid", "jellyfish", "ray", "shrimp", "mantaRay", "angler", "snorkler", "scubaDiver", "urchin", "anemone", "morel", "axolotl"}

// SeaObjects : all the misc. object nouns
var SeaObjects = []string{"boat", "ship", "submarine", "yacht", "dinghy", "raft", "kelp", "seaweed", "anchor"}

// AdjectiveDescriptors : descriptors for all nouns (creatures + objects)
var AdjectiveDescriptors = []string{"cute", "adorable", "lovable", "happy", "sandy", "bubbly", "friendly", "floating", "drifting"}

// SizeDescriptors : descriptors for all nouns (creatures + objects)
var SizeDescriptors = []string{"large", "big", "small", "giant", "massive", "tiny", "little"}

// CreatuteDescriptors : descriptors specific to creature nouns
var CreatuteDescriptors = []string{"swimming", "sleeping", "eating", "hiding"}

// Colors : all possible (sea-related) colors
var Colors = []string{"blue", "blueGreen", "darkCyan", "electricBlue", "greenBlue", "lightCyan", "lightSeaGreen", "seaGreen", "turquoise", "aqua", "aquamarine", "teal", "cyan", "gray", "darkBlue", "cerulean", "azure", "lapis", "navy"}

// SeaList : a combination of the creature + object nouns
var SeaList = append(SeaCreatures, SeaObjects...)

// Descriptors : combination of the generic (adjective + size) descriptors
var Descriptors = append(AdjectiveDescriptors, SizeDescriptors...)

// Generate : Returns a random DO username
func Generate() string {
	randNoun := random(SeaList)
	randDesc := randomDesc(randNoun)
	randColor := random(Colors)

	if len(randDesc+randNoun+randColor) <= 30 {
		return capitalize([]string{randDesc, randColor, randNoun})
	} else if len(randDesc+randNoun) <= 30 {
		return capitalize([]string{randDesc, randNoun})
	} else if len(randColor+randNoun) <= 30 {
		return capitalize([]string{randColor, randNoun})
	} else {
		return capitalize([]string{randNoun})[0:30]
	}
}
